import meta from "../../../pages/_meta.js";
import array_ds_meta from "../../../pages/array-ds/_meta.js";
import dsa_meta from "../../../pages/dsa/_meta.js";
import link_list_ds_meta from "../../../pages/link-list-ds/_meta.js";
import link_list_ds_circular_link_list_meta from "../../../pages/link-list-ds/circular-link-list/_meta.js";
import link_list_ds_doubly_link_list_meta from "../../../pages/link-list-ds/doubly-link-list/_meta.js";
import link_list_ds_singly_link_list_meta from "../../../pages/link-list-ds/singly-link-list/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "404",
  route: "/404",
  frontMatter: {
    "sidebarTitle": "404"
  }
}, {
  name: "array-ds",
  route: "/array-ds",
  children: [{
    data: array_ds_meta
  }, {
    name: "array-ds01",
    route: "/array-ds/array-ds01",
    frontMatter: {
      "sidebarTitle": "Array Ds01"
    }
  }, {
    name: "array-ds02",
    route: "/array-ds/array-ds02",
    frontMatter: {
      "sidebarTitle": "Array Ds02"
    }
  }, {
    name: "array-ds03",
    route: "/array-ds/array-ds03",
    frontMatter: {
      "sidebarTitle": "Array Ds03"
    }
  }]
}, {
  name: "array-ds",
  route: "/array-ds",
  frontMatter: {
    "sidebarTitle": "Array Ds"
  }
}, {
  name: "dsa",
  route: "/dsa",
  children: [{
    data: dsa_meta
  }, {
    name: "dsa01",
    route: "/dsa/dsa01",
    frontMatter: {
      "sidebarTitle": "Dsa01"
    }
  }, {
    name: "dsa02",
    route: "/dsa/dsa02",
    frontMatter: {
      "sidebarTitle": "Dsa02"
    }
  }, {
    name: "dsa03",
    route: "/dsa/dsa03",
    frontMatter: {
      "sidebarTitle": "Dsa03"
    }
  }]
}, {
  name: "dsa",
  route: "/dsa",
  frontMatter: {
    "sidebarTitle": "Dsa"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "link-list-ds",
  route: "/link-list-ds",
  children: [{
    data: link_list_ds_meta
  }, {
    name: "circular-link-list",
    route: "/link-list-ds/circular-link-list",
    children: [{
      data: link_list_ds_circular_link_list_meta
    }, {
      name: "circular-link-list01",
      route: "/link-list-ds/circular-link-list/circular-link-list01",
      frontMatter: {
        "sidebarTitle": "Circular Link List01"
      }
    }, {
      name: "circular-link-list02",
      route: "/link-list-ds/circular-link-list/circular-link-list02",
      frontMatter: {
        "sidebarTitle": "Circular Link List02"
      }
    }, {
      name: "circular-link-list03",
      route: "/link-list-ds/circular-link-list/circular-link-list03",
      frontMatter: {
        "sidebarTitle": "Circular Link List03"
      }
    }]
  }, {
    name: "circular-link-list",
    route: "/link-list-ds/circular-link-list",
    frontMatter: {
      "sidebarTitle": "Circular Link List"
    }
  }, {
    name: "doubly-link-list",
    route: "/link-list-ds/doubly-link-list",
    children: [{
      data: link_list_ds_doubly_link_list_meta
    }, {
      name: "doubly-link-list01",
      route: "/link-list-ds/doubly-link-list/doubly-link-list01",
      frontMatter: {
        "sidebarTitle": "Doubly Link List01"
      }
    }, {
      name: "doubly-link-list02",
      route: "/link-list-ds/doubly-link-list/doubly-link-list02",
      frontMatter: {
        "sidebarTitle": "Doubly Link List02"
      }
    }, {
      name: "doubly-link-list03",
      route: "/link-list-ds/doubly-link-list/doubly-link-list03",
      frontMatter: {
        "sidebarTitle": "Doubly Link List03"
      }
    }]
  }, {
    name: "doubly-link-list",
    route: "/link-list-ds/doubly-link-list",
    frontMatter: {
      "sidebarTitle": "Doubly Link List"
    }
  }, {
    name: "singly-link-list",
    route: "/link-list-ds/singly-link-list",
    children: [{
      data: link_list_ds_singly_link_list_meta
    }, {
      name: "singly-link-list01",
      route: "/link-list-ds/singly-link-list/singly-link-list01",
      frontMatter: {
        "sidebarTitle": "Singly Link List01"
      }
    }, {
      name: "singly-link-list02",
      route: "/link-list-ds/singly-link-list/singly-link-list02",
      frontMatter: {
        "sidebarTitle": "Singly Link List02"
      }
    }, {
      name: "singly-link-list03",
      route: "/link-list-ds/singly-link-list/singly-link-list03",
      frontMatter: {
        "sidebarTitle": "Singly Link List03"
      }
    }]
  }, {
    name: "singly-link-list",
    route: "/link-list-ds/singly-link-list",
    frontMatter: {
      "sidebarTitle": "Singly Link List"
    }
  }]
}, {
  name: "link-list-ds",
  route: "/link-list-ds",
  frontMatter: {
    "sidebarTitle": "Link List Ds"
  }
}, {
  name: "markdown",
  route: "/markdown",
  frontMatter: {
    "sidebarTitle": "Markdown"
  }
}];