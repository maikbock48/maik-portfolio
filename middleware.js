import { NextResponse } from "next/server";

const BYPASS_COOKIE = "site_preview";

export function middleware(request) {
  if (process.env.SITE_LOCKED !== "true") {
    return NextResponse.next();
  }

  const { pathname, searchParams } = request.nextUrl;
  const bypassToken = process.env.SITE_BYPASS_TOKEN;
  const providedToken = searchParams.get("preview");
  const hasPreviewCookie = request.cookies.get(BYPASS_COOKIE)?.value === bypassToken;

  if (bypassToken && providedToken === bypassToken) {
    const url = request.nextUrl.clone();
    url.searchParams.delete("preview");
    const response = NextResponse.redirect(url);
    response.cookies.set(BYPASS_COOKIE, bypassToken, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    });
    return response;
  }

  if (bypassToken && hasPreviewCookie) {
    return NextResponse.next();
  }

  if (pathname === "/coming-soon") {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/coming-soon";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|robots.txt|sitemap.xml|assets/|cv.html).*)"],
};
