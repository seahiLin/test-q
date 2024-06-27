import { createPromiseClient, Interceptor } from "@connectrpc/connect";
import { createGrpcWebTransport } from "@connectrpc/connect-web";

import { EventService } from "@buf/motiong-io_motiongapis.connectrpc_es/motiong/agii/v1/services/event_connect";

export { Event } from "@buf/motiong-io_motiongapis.bufbuild_es/motiong/agii/v1/resources/event_pb";

const interceptors: Interceptor[] = [
  // (next) => async (request) => {
  //   if (Auth0Info.token) {
  //     request.header.set("Authorization", `Bearer ${Auth0Info.token}`);
  //   }

  //   return next(request);
  // },
];
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // __CONNECT_WEB_DEVTOOLS__ is loaded in as a script, so it is not guaranteed to be loaded before your code.
  const interceptor =
    window.__CONNECT_WEB_DEVTOOLS__ !== "undefined"
      ? window.__CONNECT_WEB_DEVTOOLS__
      : null;
  if (interceptor) {
    interceptors.push(interceptor);
  }
  // To get around the fact that __CONNECT_WEB_DEVTOOLS__ might not be loaded, we can listen for a custom event,
  // and then push the interceptor to our array once loaded.
  window.addEventListener("connect-web-dev-tools-ready", () => {
    if (typeof window.__CONNECT_WEB_DEVTOOLS__ !== "undefined") {
      interceptors.push(window.__CONNECT_WEB_DEVTOOLS__);
    }
  });
}

// The transport defines what type of endpoint we're hitting.
// In our example we'll be communicating with a Connect endpoint.
// If your endpoint only supports gRPC-web, make sure to use
// `createGrpcWebTransport` instead.
const transport = createGrpcWebTransport({
  baseUrl: "https://api.platform.dev.motiong.net",
  interceptors,
});

export const eventService = createPromiseClient(EventService, transport);
