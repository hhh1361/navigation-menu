import { LightningElement, wire, api } from 'lwc';

export default class NavigationMenu extends LightningElement {
    menuItems = [{
        "label": "Solution",
        "items": [{
            "label": "ActiveAhead",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 0
            }, {
            "label": "RoomSet",
            "items" :[{
                "label": "Software",
                "href": "/HelvarPortal/s/topic/0TO1t000000Cx04GAC/software",
                "items" :[],
                "id": 1
                }, {
                "label": "User Interfaces",
                "href": "/HelvarPortal/s/topic/0TO1t000000Cx08GAC/user-interfaces",
                "items" :[],
                "id": 3
                }, {
                "label": "Sensors",
                "href": "/HelvarPortal/s/topic/0TO1t000000Cx05GAC/sensors",
                "items" :[],
                "id": 4
                }]
            }, {
            "label": "Router System",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 5
            }, {
            "label": "Services",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 6
            }, {
            "label": "Other",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 7
            }]
    }, {
        "label": "Product",
        "items": [{
            "label": "Apps",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 8
            }, {
            "label": "User Interfaces",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 9
            }, {
            "label": "Sensors",
            "items" :[{
                "label": "ActiveAhead",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzuGAC/activeahead",
                "items" :[],
                "id": 10
                }, {
                "label": "RoomSet",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzvGAC/roomset",
                "items" :[],
                "id": 11
                }, {
                "label": "Router System",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzwGAC/router-system",
                "items" :[],
                "id": 12
                }, {
                "label": "Standalone",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
                "items" :[],
                "id": 13
                }]
            }, {
            "label": "Drivers",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 14
            }, {
            "label": "Routers",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 15
            }, {
            "label": "Software",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 16
            }, {
            "label": "HCG",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 17
            }, {
            "label": "Control Units",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 18
            }]
    }, {
        "label": "Article Type",
        "items": [{
            "label": "FAQ Articles",
            "items" :[],
            "id": 19
            }, {
            "label": "Installation Guides",
            "items" :[{
                "label": "ActiveAhead",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzuGAC/activeahead",
                "items" :[],
                "id": 20
                }, {
                "label": "RoomSet",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzvGAC/roomset",
                "items" :[],
                "id": 21
                }, {
                "label": "Router System",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzwGAC/router-system",
                "items" :[],
                "id": 22
                }, {
                "label": "Standalone",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
                "items" :[],
                "id": 23
                }]
            }, {
            "label": "User Guides",
            "items" :[{
                "label": "ActiveAhead",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzuGAC/activeahead",
                "items" :[],
                "id": 24
                }, {
                "label": "RoomSet",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzvGAC/roomset",
                "items" :[],
                "id": 25
                }, {
                "label": "Router System",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzwGAC/router-system",
                "items" :[],
                "id": 26
                }, {
                "label": "Standalone",
                "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
                "items" :[],
                "id": 27
                }]
            }, {
            "label": "Release Notes",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 28
            }, {
            "label": "Technical Notes",
            "href": "/HelvarPortal/s/topic/0TO1t000000CwzzGAC/other",
            "items" :[],
            "id": 30
        }]
    }];

    triggerMenu(event) {
        const menu = this.template.querySelectorAll(".navmenu-menu")[0];
        menu.classList.toggle('navmenu-hidden');
        event.currentTarget.classList.toggle('change')
    }
}