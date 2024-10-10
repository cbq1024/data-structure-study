import meta from "../../../pages/_meta.js";
import demo_meta from "../../../pages/demo/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "demo",
  route: "/demo",
  children: [{
    data: demo_meta
  }, {
    name: "demo01",
    route: "/demo/demo01",
    frontMatter: {
      "sidebarTitle": "Demo01"
    }
  }]
}, {
  name: "demo",
  route: "/demo",
  frontMatter: {
    "sidebarTitle": "Demo"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}];