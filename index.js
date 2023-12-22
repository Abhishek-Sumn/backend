const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => { console.log(`It's http://localhost:${PORT}`) }
)
const cors = require("cors");

app.use(
  cors({
    origin: "https://fooder-abhi.vercel.app",
    credentials:true,
}));

app.get('/restaurant', (req, res) => {
    res.status(200).send({
        "statusCode": 0,
        "data": {
            "statusMessage": "done successfully",
            "pageOffset": {
                "nextOffset": "COVCELQ4KIDoy5Xjh+jrLTCnEzgD",
                "widgetOffset": {
                    "NewListingView_Topical_Fullbleed": "",
                    "NewListingView_category_bar_chicletranking_TwoRows": "",
                    "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
                    "Restaurant_Group_WebView_SEO_PB_Theme": "",
                    "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "10",
                    "inlineFacetFilter": "",
                    "restaurantCountWidget": ""
                }
            },
            "cards": [
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                            "header": {
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 14,
                                        "bottom": 2
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 3,
                                "horizontalScrollEnabled": true,
                                "shouldSnap": true,
                                "itemSpacing": 10,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "top": 12,
                                        "right": 16,
                                        "bottom": 12
                                    }
                                },
                                "scrollBar": {
                                    "scrollThumbColor": "#E46D47",
                                    "scrollTrackColor": "#E4E4E4",
                                    "width": 54,
                                    "height": 4,
                                    "scrollStyling": {
                                        "padding": {
                                            "top": 6,
                                            "bottom": 12
                                        }
                                    }
                                },
                                "autoScrollConfig": {
                                    "isScrollEnabled": true,
                                    "autoScrollDuration": 4,
                                    "autoScrollResetDuration": 4
                                },
                                "dotScrollBar": {
                                    "activeColor": "#36393E",
                                    "inactiveColor": "#66686E",
                                    "activeSize": 16,
                                    "inactiveMediumSize": 7,
                                    "inactiveSmallSize": 4,
                                    "dotSpacing": 8,
                                    "windowSize": 5,
                                    "showCount": true,
                                    "textColor": "#FFFFFF",
                                    "scrollStyling": {
                                        "padding": {
                                            "top": 6,
                                            "bottom": 12
                                        }
                                    }
                                }
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "1131686",
                                        "imageId": "rng/md/carousel/production/63439465f0824c81088e0d8f00c24dd0",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/90964?collection_id=90964&tags=layout_ux4&type=rcv2",
                                            "text": "All new super",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "GET 50% OFF ON FIRST ORDER",
                                            "altTextCta": "ORDER NOW"
                                        },
                                        "entityId": "90964",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "1539072",
                                        "imageId": "rng/md/carousel/production/fd426b942f60921eb65afb229d274574",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/99945?collection_id=99945&type=rcv2",
                                            "text": "Gourmet LN/DN",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "GOURMET Snacks",
                                            "altTextCta": "Order now"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=99945",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "1524700",
                                        "imageId": "rng/md/carousel/production/967140f5e000b2f1e35f54a7c965e7dc",
                                        "action": {
                                            "link": "swiggy://fusion-landing?id=theCokepage&show_location=true",
                                            "text": "Coke",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "Coke",
                                            "altTextCta": "Order Now"
                                        },
                                        "entityId": "swiggy://fusion-landing?id=theCokepage&show_location=true",
                                        "frequencyCapping": {},
                                        "isManualAds": true
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.95238,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.59685,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "topical_banner",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "1131686",
                                            "imageId": "rng/md/carousel/production/63439465f0824c81088e0d8f00c24dd0",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/90964?collection_id=90964&tags=layout_ux4&type=rcv2",
                                                "text": "All new super",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "GET 50% OFF ON FIRST ORDER",
                                                "altTextCta": "ORDER NOW"
                                            },
                                            "entityId": "90964",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "1539072",
                                            "imageId": "rng/md/carousel/production/fd426b942f60921eb65afb229d274574",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/99945?collection_id=99945&type=rcv2",
                                                "text": "Gourmet LN/DN",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "GOURMET Snacks",
                                                "altTextCta": "Order now"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=99945",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "1524700",
                                            "imageId": "rng/md/carousel/production/967140f5e000b2f1e35f54a7c965e7dc",
                                            "action": {
                                                "link": "swiggy://fusion-landing?id=theCokepage&show_location=true",
                                                "text": "Coke",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "Coke",
                                                "altTextCta": "Order Now"
                                            },
                                            "entityId": "swiggy://fusion-landing?id=theCokepage&show_location=true",
                                            "frequencyCapping": {},
                                            "isManualAds": true
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.95238,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.59685,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                            "header": {
                                "title": "What's on your mind?",
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 16,
                                        "bottom": 4
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 10,
                                "horizontalScrollEnabled": true,
                                "itemSpacing": 24,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 8,
                                        "top": 8,
                                        "right": 12,
                                        "bottom": 4
                                    }
                                },
                                "scrollBar": {},
                                "widgetTheme": {
                                    "defaultMode": {
                                        "backgroundColour": "#FFFFFF",
                                        "theme": "THEME_TYPE_LIGHT"
                                    },
                                    "darkMode": {
                                        "theme": "THEME_TYPE_DARK"
                                    }
                                }
                            },
                            "imageGridCards": {
                                "info": [
                                    {
                                        "id": "750592",
                                        "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                                            "text": "Biryani",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for biryani",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "762797",
                                        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                                            "text": "Burgers",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for burger",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750580",
                                        "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                                            "text": "pizzas",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for pizza",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750223",
                                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                                            "text": "Rolls",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for roll",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "749769",
                                        "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                                            "text": "Momos",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for momos",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750132",
                                        "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                                            "text": "Dosa",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for dosa",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750230",
                                        "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                                            "text": "Samosa",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for samosa",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80397",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "749874",
                                        "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                                            "text": "Cakes",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for cakes",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750588",
                                        "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                                            "text": "Chinese",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for chinese",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750584",
                                        "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                                            "text": "South Indian",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for south indian",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750249",
                                        "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                                            "text": "Shawarma",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for shawarma",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750209",
                                        "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                                            "text": "Pastry",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for Pastry",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80358",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750638",
                                        "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                                            "text": "Juice",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for juice",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750235",
                                        "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                                            "text": "Sandwich",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for sandwich",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750217",
                                        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                                            "text": "Pav Bhaji",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for pav bhaji",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750207",
                                        "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                                            "text": "Pasta",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for pasta",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80480",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750605",
                                        "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                                            "text": "Tea",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurants curated for tea",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750226",
                                        "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                                            "text": "Salad",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for salad",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "750239",
                                        "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                                            "text": "Shake",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for shakes",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                                        "frequencyCapping": {}
                                    },
                                    {
                                        "id": "749774",
                                        "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                                        "action": {
                                            "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                                            "text": "Noodles",
                                            "type": "WEBLINK"
                                        },
                                        "entityType": "BANNER",
                                        "accessibility": {
                                            "altText": "restaurant curated for noodles",
                                            "altTextCta": "open"
                                        },
                                        "entityId": "80464",
                                        "frequencyCapping": {}
                                    }
                                ],
                                "style": {
                                    "width": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 0.2941,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                    },
                                    "height": {
                                        "type": "TYPE_RELATIVE",
                                        "value": 1.2444,
                                        "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                    }
                                }
                            },
                            "id": "whats_on_your_mind",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.ImageInfoLayoutCard",
                                    "info": [
                                        {
                                            "id": "750592",
                                            "imageId": "v1675667625/PC_Creative%20refresh/Biryani_2.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83649?collection_id=83649&searchQuery=biryani&tags=layout_CCS_Biryani&type=rcv2",
                                                "text": "Biryani",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for biryani",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83649&tags=layout_CCS_Biryani&searchQuery=biryani",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "762797",
                                            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Burger.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83637?collection_id=83637&tags=layout_CCS_Burger&type=rcv2",
                                                "text": "Burgers",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for burger",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83637&tags=layout_CCS_Burger",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750580",
                                            "imageId": "v1674029856/PC_Creative%20refresh/3D_bau/banners_new/Pizza.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83644?collection_id=83644&tags=layout_CCS_Pizza&type=rcv2",
                                                "text": "pizzas",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for pizza",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83644&tags=layout_CCS_Pizza",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750223",
                                            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Rolls.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83670?collection_id=83670&tags=layout_CCS_Rolls&type=rcv2",
                                                "text": "Rolls",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for roll",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83670&tags=layout_CCS_Rolls",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "749769",
                                            "imageId": "v1674029852/PC_Creative%20refresh/3D_bau/banners_new/Momos.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80462?collection_id=80462&tags=layout_CCS_Momos&type=rcv2",
                                                "text": "Momos",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for momos",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80462&tags=layout_CCS_Momos",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750132",
                                            "imageId": "v1674029850/PC_Creative%20refresh/3D_bau/banners_new/Dosa.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80426?collection_id=80426&tags=layout_CCS_Dosa&type=rcv2",
                                                "text": "Dosa",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for dosa",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80426&tags=layout_CCS_Dosa",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750230",
                                            "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Samosas.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80397?collection_id=80397&tags=layout_BAU_Contextual%2Csamosa&type=rcv2",
                                                "text": "Samosa",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for samosa",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "80397",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "749874",
                                            "imageId": "v1674029845/PC_Creative%20refresh/3D_bau/banners_new/Cakes.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83656?collection_id=83656&tags=layout_CCS_Cake&type=rcv2",
                                                "text": "Cakes",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for cakes",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83656&tags=layout_CCS_Cake",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750588",
                                            "imageId": "v1674029848/PC_Creative%20refresh/3D_bau/banners_new/Chinese.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83647?collection_id=83647&tags=layout_CCS_Chinese&type=rcv2",
                                                "text": "Chinese",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for chinese",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83647&tags=layout_CCS_Chinese",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750584",
                                            "imageId": "v1675667626/PC_Creative%20refresh/South_Indian_4.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83646?collection_id=83646&tags=layout_CCS_SouthIndian&type=rcv2",
                                                "text": "South Indian",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for south indian",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83646&tags=layout_CCS_SouthIndian",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750249",
                                            "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Shawarma.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80403?collection_id=80403&tags=layout_Shawarma_Contextual&type=rcv2",
                                                "text": "Shawarma",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for shawarma",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80403&tags=layout_Shawarma_Contextual",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750209",
                                            "imageId": "v1674029847/PC_Creative%20refresh/3D_bau/banners_new/Pastry.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80358?collection_id=80358&tags=layout_BAU_Contextual%2Clayout_ux4&type=rcv2",
                                                "text": "Pastry",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for Pastry",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "80358",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750638",
                                            "imageId": "v1674029843/PC_Creative%20refresh/3D_bau/banners_new/Juice.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80446?collection_id=80446&tags=layout_Juices_Contextual&type=rcv2",
                                                "text": "Juice",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for juice",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80446&tags=layout_Juices_Contextual",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750235",
                                            "imageId": "v1674029860/PC_Creative%20refresh/3D_bau/banners_new/Sandwich.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83667?collection_id=83667&tags=layout_CCS_Sandwiches&type=rcv2",
                                                "text": "Sandwich",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for sandwich",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83667&tags=layout_CCS_Sandwiches",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750217",
                                            "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pav_Bhaji.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80364?collection_id=80364&tags=layout_PavBhaji_Contextual&type=rcv2",
                                                "text": "Pav Bhaji",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for pav bhaji",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80364&tags=layout_PavBhaji_Contextual",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750207",
                                            "imageId": "v1674029854/PC_Creative%20refresh/3D_bau/banners_new/Pasta.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80480?collection_id=80480&tags=layout_BAU_Contextual%2Cpasta%2Cads_pc_pasta&type=rcv2",
                                                "text": "Pasta",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for pasta",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "80480",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750605",
                                            "imageId": "rng/md/carousel/production/cbb85a3c1684891105294d11f8359996",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80494?collection_id=80494&tags=layout_CCS_Tea&type=rcv2",
                                                "text": "Tea",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurants curated for tea",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80494&tags=layout_CCS_Tea",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750226",
                                            "imageId": "v1674029859/PC_Creative%20refresh/3D_bau/banners_new/Salad.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80395?collection_id=80395&tags=layout_CCS_Salad&type=rcv2",
                                                "text": "Salad",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for salad",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=80395&tags=layout_CCS_Salad",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "750239",
                                            "imageId": "v1674029858/PC_Creative%20refresh/3D_bau/banners_new/Shakes.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/83674?collection_id=83674&tags=layout_CCS_Shakes&type=rcv2",
                                                "text": "Shake",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for shakes",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "swiggy://collectionV2?collection_id=83674&tags=layout_CCS_Shakes",
                                            "frequencyCapping": {}
                                        },
                                        {
                                            "id": "749774",
                                            "imageId": "v1674029855/PC_Creative%20refresh/3D_bau/banners_new/Noodles.png",
                                            "action": {
                                                "link": "https://www.swiggy.com/collections/80464?collection_id=80464&tags=layout_BAU_Contextual%2Cnoodles&type=rcv2",
                                                "text": "Noodles",
                                                "type": "WEBLINK"
                                            },
                                            "entityType": "BANNER",
                                            "accessibility": {
                                                "altText": "restaurant curated for noodles",
                                                "altTextCta": "open"
                                            },
                                            "entityId": "80464",
                                            "frequencyCapping": {}
                                        }
                                    ],
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.2941,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_CONTAINER_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 1.2444,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                            "header": {
                                "title": "Top restaurant chains in Bangalore",
                                "action": {},
                                "headerStyling": {
                                    "padding": {
                                        "left": 16,
                                        "top": 28,
                                        "bottom": 18
                                    }
                                }
                            },
                            "layout": {
                                "rows": 1,
                                "columns": 20,
                                "horizontalScrollEnabled": true,
                                "itemSpacing": 32,
                                "widgetPadding": {},
                                "containerStyle": {
                                    "containerPadding": {
                                        "left": 16,
                                        "right": 12,
                                        "bottom": 12
                                    }
                                },
                                "scrollBar": {
                                    "scrollThumbColor": "#E46D47",
                                    "scrollTrackColor": "#02060C",
                                    "width": 54,
                                    "height": 4,
                                    "scrollStyling": {
                                        "padding": {
                                            "top": 6,
                                            "bottom": 24
                                        }
                                    }
                                },
                                "widgetTheme": {
                                    "defaultMode": {
                                        "backgroundColour": "#1B3028",
                                        "theme": "THEME_TYPE_DARK"
                                    },
                                    "darkMode": {
                                        "backgroundColour": "#1B3028",
                                        "theme": "THEME_TYPE_DARK"
                                    }
                                }
                            },
                            "id": "top_brands_for_you",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                    "restaurants": [
                                        {
                                            "info": {
                                                "id": "10576",
                                                "name": "Pizza Hut",
                                                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Pizzas"
                                                ],
                                                "avgRating": 4,
                                                "parentId": "721",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 0.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20 mins",
                                                    "lastMileTravelString": "0.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 04:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                            "shortDescription": "Kids Favourite options",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                                        "shortDescription": "Kids Favourite options"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "5934",
                                                "name": "Burger King",
                                                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "American"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "166",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 18,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "18 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 05:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹129"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "70246",
                                                "name": "Starbucks Coffee",
                                                "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
                                                "locality": "7th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Beverages",
                                                    "Cafe",
                                                    "Snacks",
                                                    "Desserts",
                                                    "Bakery",
                                                    "Ice Cream"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "195515",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 18,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "18 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹219"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/starbucks-coffee-7th-block-koramangala-bangalore-70246",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "25620",
                                                "name": "KFC",
                                                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                                                "locality": "Intermediate Ring Road",
                                                "areaName": "Ejipura",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Biryani",
                                                    "American",
                                                    "Snacks",
                                                    "Fast Food"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "547",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 16,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "16 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "140887",
                                                "name": "McDonald's",
                                                "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                                                "locality": "Mantri Avenue",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Beverages",
                                                    "Cafe",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "630",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 16,
                                                    "lastMileTravel": 1.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "16 mins",
                                                    "lastMileTravelString": "1.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:45:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "74444",
                                                "name": "Samosa Party",
                                                "cloudinaryImageId": "d8d4e708a41f011361c949d44990d5e0",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹100 for two",
                                                "cuisines": [
                                                    "Fast Food",
                                                    "Snacks",
                                                    "Beverages",
                                                    "Chaat",
                                                    "North Indian",
                                                    "Street Food",
                                                    "Sweets",
                                                    "Desserts",
                                                    "Punjabi",
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "6364",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 21,
                                                    "lastMileTravel": 1.6,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "21 mins",
                                                    "lastMileTravelString": "1.6 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-29 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "280216",
                                                "name": "Lavonne",
                                                "cloudinaryImageId": "udzufnegmtvimdypnfbk",
                                                "locality": "Indiranagar",
                                                "areaName": "Indiranagar",
                                                "costForTwo": "₹1000 for two",
                                                "cuisines": [
                                                    "Bakery",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "10530",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 32,
                                                    "lastMileTravel": 5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "32 mins",
                                                    "lastMileTravelString": "5.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 22:40:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ],
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "108424",
                                                "name": "Domino's Pizza",
                                                "cloudinaryImageId": "vw6n5betlssnqelt7rmu",
                                                "locality": "5TH Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Pizzas",
                                                    "Italian",
                                                    "Pastas",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "2456",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 00:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                            "shortDescription": "Kids Favourite options",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                                        "shortDescription": "Kids Favourite options"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹150 OFF",
                                                    "subHeader": "ABOVE ₹299",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/dominos-pizza-5th-block-koramangala-bangalore-108424",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "209557",
                                                "name": "Subway",
                                                "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
                                                "locality": "JNC College Road",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Salads",
                                                    "Snacks",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "2",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 22,
                                                    "lastMileTravel": 2,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "22 mins",
                                                    "lastMileTravelString": "2.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/subway-jnc-college-road-koramangala-bangalore-209557",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "263485",
                                                "name": "Chaayos Chai+Snacks=Relax",
                                                "cloudinaryImageId": "cace805a6ba74137571d0f7ac92302b1",
                                                "locality": "Kormangala 8th Block",
                                                "areaName": "Kormangala",
                                                "costForTwo": "₹250 for two",
                                                "cuisines": [
                                                    "Bakery",
                                                    "Beverages",
                                                    "Chaat",
                                                    "Desserts",
                                                    "Home Food",
                                                    "Italian",
                                                    "Maharashtrian",
                                                    "Snacks",
                                                    "Street Food",
                                                    "Sweets"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "281782",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 16,
                                                    "lastMileTravel": 0.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "16 mins",
                                                    "lastMileTravelString": "0.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-8th-block-kormangala-bangalore-263485",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "37746",
                                                "name": "Salt - Indian Restaurant Bar & Grill",
                                                "cloudinaryImageId": "zp0sgyo1uqgnin1ei08k",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹1300 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Biryani",
                                                    "Thalis",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "453059",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 30,
                                                    "lastMileTravel": 2.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "30 mins",
                                                    "lastMileTravelString": "2.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:30:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/salt-indian-restaurant-bar-and-grill-koramangala-bangalore-37746",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "50467",
                                                "name": "Bakingo",
                                                "cloudinaryImageId": "0c53fd8f62e3d25ba56d1b4cfe572cef",
                                                "locality": "1st Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "Bakery",
                                                    "Desserts",
                                                    "Beverages",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "3818",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 21,
                                                    "lastMileTravel": 2.1,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "21 mins",
                                                    "lastMileTravelString": "2.1 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 01:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "₹175 OFF",
                                                    "subHeader": "ABOVE ₹999",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/bakingo-1st-block-koramangala-bangalore-50467",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "41913",
                                                "name": "Chinita Real Mexican Food",
                                                "cloudinaryImageId": "29fc772cc06b07a4b018e4971d96c9a3",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹750 for two",
                                                "cuisines": [
                                                    "Mexican",
                                                    "Salads",
                                                    "Desserts",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "5064",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 16,
                                                    "lastMileTravel": 0.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "16 mins",
                                                    "lastMileTravelString": "0.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ],
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                            "shortDescription": "Kids Favourite options",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                                        "shortDescription": "Kids Favourite options"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/chinita-real-mexican-food-koramangala-bangalore-41913",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "158855",
                                                "name": "Candice's Gourmet Sandwiches & Wraps",
                                                "cloudinaryImageId": "d1331113564b015c9d55c48ff48a2553",
                                                "locality": "5th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹600 for two",
                                                "cuisines": [
                                                    "Continental",
                                                    "American",
                                                    "Salads",
                                                    "Desserts",
                                                    "Beverages",
                                                    "Healthy Food"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "465403",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 19,
                                                    "lastMileTravel": 0.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "19 mins",
                                                    "lastMileTravelString": "0.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ],
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "30% OFF",
                                                    "subHeader": "UPTO ₹75"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/candices-gourmet-sandwiches-and-wraps-5th-block-koramangala-bangalore-158855",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "381853",
                                                "name": "ITC Master Chef Creations",
                                                "cloudinaryImageId": "b15a2367ff3d6f0bf92d1def3c1e5c59",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹650 for two",
                                                "cuisines": [
                                                    "North Indian",
                                                    "Biryani",
                                                    "Indian",
                                                    "Punjabi",
                                                    "Chaat",
                                                    "Kebabs",
                                                    "Tandoor",
                                                    "Mughlai",
                                                    "Desserts",
                                                    "Snacks"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "11992",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ],
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/itc-master-chef-creations-koramangala-bangalore-381853",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "347250",
                                                "name": "Toscano's Crafted Cakes and Desserts",
                                                "cloudinaryImageId": "5fd0589ef5eaaa07edc7c8655d0540aa",
                                                "locality": "Hosur Road",
                                                "areaName": "Adugodi",
                                                "costForTwo": "₹600 for two",
                                                "cuisines": [
                                                    "Desserts",
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "12094",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 2.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "26 mins",
                                                    "lastMileTravelString": "2.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "50% OFF",
                                                    "subHeader": "UPTO ₹100"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/toscanos-crafted-cakes-and-desserts-hosur-road-adugodi-bangalore-347250",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "450124",
                                                "name": "1522 - The Pub",
                                                "cloudinaryImageId": "qtbt4uwnp6honairbudc",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹600 for two",
                                                "cuisines": [
                                                    "Chinese",
                                                    "Indian"
                                                ],
                                                "avgRating": 4,
                                                "parentId": "22885",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 0.8,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "26 mins",
                                                    "lastMileTravelString": "0.8 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/1522-the-pub-koramangala-bangalore-450124",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "107443",
                                                "name": "Lo! - Low Carb and Keto Foods",
                                                "cloudinaryImageId": "o8t0w5gdlujpigauaflw",
                                                "locality": "Sector-6",
                                                "areaName": "HSR Layout",
                                                "costForTwo": "₹150 for two",
                                                "cuisines": [
                                                    "Healthy Food",
                                                    "Keto",
                                                    "North Indian",
                                                    "Continental"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "8282",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 22,
                                                    "lastMileTravel": 3.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "22 mins",
                                                    "lastMileTravelString": "3.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 00:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "brand",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "brand"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/lo-low-carb-and-keto-foods-sector-6-hsr-layout-bangalore-107443",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "108097",
                                                "name": "Ambur Star Briyani Since 1890",
                                                "cloudinaryImageId": "yktanq9i7yfjrixaghuj",
                                                "locality": "2nd Stage",
                                                "areaName": "BTM Layout",
                                                "costForTwo": "₹500 for two",
                                                "cuisines": [
                                                    "Biryani",
                                                    "Chettinad",
                                                    "Andhra",
                                                    "Beverages",
                                                    "Seafood"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "21400",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 26,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "26 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:45:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/ambur-star-briyani-since-1890-2nd-stage-btm-layout-bangalore-108097",
                                                "type": "WEBLINK"
                                            }
                                        },
                                        {
                                            "info": {
                                                "id": "305",
                                                "name": "A2B - Adyar Ananda Bhavan",
                                                "cloudinaryImageId": "gxydb9wvkadarapno4hk",
                                                "locality": "7th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹300 for two",
                                                "cuisines": [
                                                    "South Indian",
                                                    "North Indian",
                                                    "Sweets",
                                                    "Chinese"
                                                ],
                                                "avgRating": 4.3,
                                                "veg": true,
                                                "parentId": "22",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 25,
                                                    "lastMileTravel": 2.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "25 mins",
                                                    "lastMileTravelString": "2.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 22:30:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                            "description": "pureveg"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "pureveg",
                                                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "20% OFF",
                                                    "subHeader": "UPTO ₹50"
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {},
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/a2b-adyar-ananda-bhavan-7th-block-koramangala-bangalore-305",
                                                "type": "WEBLINK"
                                            }
                                        }
                                    ],
                                    "theme": "Restaurant_Group_WebView_SEO_PB_Theme",
                                    "widgetType": "WIDGET_TYPE_POPULAR_BRANDS",
                                    "style": {
                                        "width": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.41111112,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_DEVICE_WIDTH"
                                        },
                                        "height": {
                                            "type": "TYPE_RELATIVE",
                                            "value": 0.7027027,
                                            "reference": "RELATIVE_DIMENSION_REFERENCE_WIDTH"
                                        },
                                        "layoutAlignment": "LAYOUT_ALIGNMENT_LEFT"
                                    },
                                    "collectionId": "84124"
                                }
                            }
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.seo.widgets.v1.BasicContent",
                            "title": "Restaurants with online food delivery in Bangalore",
                            "id": "popular_restaurants_title"
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.InlineViewFilterSortWidget",
                            "sortConfigs": [
                                {
                                    "key": "relevance",
                                    "title": "Relevance (Default)",
                                    "selected": true,
                                    "defaultSelection": true
                                },
                                {
                                    "key": "deliveryTimeAsc",
                                    "title": "Delivery Time"
                                },
                                {
                                    "key": "modelBasedRatingDesc",
                                    "title": "Rating"
                                },
                                {
                                    "key": "costForTwoAsc",
                                    "title": "Cost: Low to High"
                                },
                                {
                                    "key": "costForTwoDesc",
                                    "title": "Cost: High to Low"
                                }
                            ],
                            "restaurantCount": 2000,
                            "facetList": [
                                {
                                    "label": "Delivery Time",
                                    "id": "deliveryTime",
                                    "selection": "SELECT_TYPE_MULTISELECT",
                                    "facetInfo": [
                                        {
                                            "label": "Fast Delivery",
                                            "id": "deliveryTimefacetquery1",
                                            "analytics": {},
                                            "openFilter": true
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_HALF_CARD",
                                    "subLabel": "Filter by"
                                },
                                {
                                    "label": "Cuisines",
                                    "id": "catalog_cuisines",
                                    "selection": "SELECT_TYPE_MULTISELECT",
                                    "facetInfo": [
                                        {
                                            "label": "Afghani",
                                            "id": "query_afghani",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "American",
                                            "id": "query_american",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Andhra",
                                            "id": "query_andhra",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Arabian",
                                            "id": "query_arabian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Asian",
                                            "id": "query_asian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Assamese",
                                            "id": "query_assamese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Awadhi",
                                            "id": "query_awadhi",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Bakery",
                                            "id": "query_bakery",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Barbecue",
                                            "id": "query_barbecue",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Bengali",
                                            "id": "query_bengali",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Beverages",
                                            "id": "query_beverages",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Bihari",
                                            "id": "query_bihari",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Biryani",
                                            "id": "query_biryani",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "British",
                                            "id": "query_british",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Bubble Tea",
                                            "id": "query_bubble_tea",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Burgers",
                                            "id": "query_burgers",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Burmese",
                                            "id": "query_burmese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Cafe",
                                            "id": "query_cafe",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Cakes and Pastries",
                                            "id": "query_cakes_and_pastries",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Chaat",
                                            "id": "query_chaat",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Chettinad",
                                            "id": "query_chettinad",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Chinese",
                                            "id": "query_chinese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Coastal",
                                            "id": "query_coastal",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Combo",
                                            "id": "query_combo",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Continental",
                                            "id": "query_continental",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Desserts",
                                            "id": "query_desserts",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "European",
                                            "id": "query_european",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Fast Food",
                                            "id": "query_fast_food",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "French",
                                            "id": "query_french",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "German",
                                            "id": "query_german",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Goan",
                                            "id": "query_goan",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Greek",
                                            "id": "query_greek",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Grill",
                                            "id": "query_grill",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Gujarati",
                                            "id": "query_gujarati",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Healthy Food",
                                            "id": "query_healthy_food",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Home Food",
                                            "id": "query_home_food",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Hyderabadi",
                                            "id": "query_hyderabadi",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Ice Cream",
                                            "id": "query_ice_cream",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Ice Cream Cakes",
                                            "id": "query_ice_cream_cakes",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Indian",
                                            "id": "query_indian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Indonesian",
                                            "id": "query_indonesian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Italian",
                                            "id": "query_italian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Italian-American",
                                            "id": "query_italian-american",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Jain",
                                            "id": "query_jain",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Japanese",
                                            "id": "query_japanese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Juices",
                                            "id": "query_juices",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Kashmiri",
                                            "id": "query_kashmiri",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Kebabs",
                                            "id": "query_kebabs",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Kerala",
                                            "id": "query_kerala",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Keto",
                                            "id": "query_keto",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Konkan",
                                            "id": "query_konkan",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Korean",
                                            "id": "query_korean",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Lebanese",
                                            "id": "query_lebanese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Lucknowi",
                                            "id": "query_lucknowi",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Maharashtrian",
                                            "id": "query_maharashtrian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Malaysian",
                                            "id": "query_malaysian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Mangalorean",
                                            "id": "query_mangalorean",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Mediterranean",
                                            "id": "query_mediterranean",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Mexican",
                                            "id": "query_mexican",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Middle Eastern",
                                            "id": "query_middle_eastern",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Mughlai",
                                            "id": "query_mughlai",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Naga",
                                            "id": "query_naga",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Nepalese",
                                            "id": "query_nepalese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "North Eastern",
                                            "id": "query_north_eastern",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "North Indian",
                                            "id": "query_north_indian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Oriental",
                                            "id": "query_oriental",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Oriya",
                                            "id": "query_oriya",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Paan",
                                            "id": "query_paan",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Pan-Asian",
                                            "id": "query_pan-asian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Parsi",
                                            "id": "query_parsi",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Pastas",
                                            "id": "query_pastas",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Pizzas",
                                            "id": "query_pizzas",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Portuguese",
                                            "id": "query_portuguese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Punjabi",
                                            "id": "query_punjabi",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Raja",
                                            "id": "query_raja",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Rajasthani",
                                            "id": "query_rajasthani",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Rolls",
                                            "id": "query_rolls",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Rolls & Wraps",
                                            "id": "query_rolls_&_wraps",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Salads",
                                            "id": "query_salads",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Seafood",
                                            "id": "query_seafood",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Singaporean",
                                            "id": "query_singaporean",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Snacks",
                                            "id": "query_snacks",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "South Indian",
                                            "id": "query_south_indian",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Sri Lankan",
                                            "id": "query_sri_lankan",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Steakhouse",
                                            "id": "query_steakhouse",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Street Food",
                                            "id": "query_street_food",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Sushi",
                                            "id": "query_sushi",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Sweets",
                                            "id": "query_sweets",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Tandoor",
                                            "id": "query_tandoor",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Telangana",
                                            "id": "query_telangana",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Tex-Mex",
                                            "id": "query_tex-mex",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Thai",
                                            "id": "query_thai",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Thalis",
                                            "id": "query_thalis",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Tibetan",
                                            "id": "query_tibetan",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Turkish",
                                            "id": "query_turkish",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Vietnamese",
                                            "id": "query_vietnamese",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Waffle",
                                            "id": "query_waffle",
                                            "analytics": {},
                                            "openFilter": true
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_HALF_CARD",
                                    "canSearch": true,
                                    "subLabel": "Filter by cuisine",
                                    "openFilter": true
                                },
                                {
                                    "label": "Explore",
                                    "id": "explore",
                                    "selection": "SELECT_TYPE_MULTISELECT",
                                    "facetInfo": [
                                        {
                                            "label": "New on Swiggy",
                                            "id": "newfacetquery1",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Swiggy Exclusives",
                                            "id": "isExclusivefacetquery1",
                                            "analytics": {}
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_HALF_CARD"
                                },
                                {
                                    "label": "Ratings",
                                    "id": "rating",
                                    "selection": "SELECT_TYPE_MULTISELECT",
                                    "facetInfo": [
                                        {
                                            "label": "Ratings 4.5+",
                                            "id": "ratingfacetquery3",
                                            "analytics": {}
                                        },
                                        {
                                            "label": "Ratings 4.0+",
                                            "id": "ratingfacetquery4",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Ratings 3.5+",
                                            "id": "ratingfacetquery5",
                                            "analytics": {}
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_HALF_CARD",
                                    "subLabel": "Filter by"
                                },
                                {
                                    "label": "Veg/Non-Veg",
                                    "id": "isVeg",
                                    "selection": "SELECT_TYPE_SINGLESELECT",
                                    "facetInfo": [
                                        {
                                            "label": "Pure Veg",
                                            "id": "isVegfacetquery2",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Non Veg",
                                            "id": "isVegfacetquery3",
                                            "analytics": {}
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_FLATTENED",
                                    "subLabel": "Filter by"
                                },
                                {
                                    "label": "Offers",
                                    "id": "restaurantOfferMultiTd",
                                    "selection": "SELECT_TYPE_SINGLESELECT",
                                    "facetInfo": [
                                        {
                                            "label": "Offers",
                                            "id": "restaurantOfferMultiTdfacetquery3",
                                            "analytics": {},
                                            "openFilter": true
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_FLATTENED",
                                    "subLabel": "Restaurants with"
                                },
                                {
                                    "label": "Cost for two",
                                    "id": "costForTwo",
                                    "selection": "SELECT_TYPE_MULTISELECT",
                                    "facetInfo": [
                                        {
                                            "label": "Rs. 300-Rs. 600",
                                            "id": "costForTwofacetquery3",
                                            "analytics": {},
                                            "openFilter": true
                                        },
                                        {
                                            "label": "Greater than Rs. 600",
                                            "id": "costForTwofacetquery4",
                                            "analytics": {}
                                        },
                                        {
                                            "label": "Less than Rs. 300",
                                            "id": "costForTwofacetquery5",
                                            "analytics": {},
                                            "openFilter": true
                                        }
                                    ],
                                    "viewType": "VIEW_TYPE_HALF_CARD",
                                    "subLabel": "Filter by"
                                }
                            ]
                        }
                    }
                },
                {
                    "card": {
                        "card": {
                            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
                            "layout": {
                                "columns": 4
                            },
                            "id": "restaurant_grid_listing",
                            "gridElements": {
                                "infoWithStyle": {
                                    "@type": "type.googleapis.com/swiggy.presentation.food.v2.FavouriteRestaurantInfoWithStyle",
                                    "restaurants": [
                                        {
                                            "info": {
                                                "id": "10576",
                                                "name": "Pizza Hut",
                                                "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Pizzas"
                                                ],
                                                "avgRating": 4,
                                                "parentId": "721",
                                                "avgRatingString": "4.0",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 0.7,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20 mins",
                                                    "lastMileTravelString": "0.7 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 04:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                            "shortDescription": "Kids Favourite options",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                                        "shortDescription": "Kids Favourite options"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/pizza-hut-koramangala-bangalore-10576",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "426776",
                                                "name": "Theobroma",
                                                "cloudinaryImageId": "b033728dcb0101ceb19bff0e1e1f6474",
                                                "locality": "7th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Desserts",
                                                    "Bakery",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.7,
                                                "parentId": "1040",
                                                "avgRatingString": "4.7",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 15,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "15 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ],
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                            "shortDescription": "Kids Favourite options",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "v1702882113/Ratnesh_Badges/20x20_px_kids__20px.png",
                                                                        "shortDescription": "Kids Favourite options"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "10% OFF",
                                                    "subHeader": "ABOVE ₹159",
                                                    "discountTag": "FLAT DEAL"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/theobroma-7th-block-koramangala-bangalore-426776",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "5934",
                                                "name": "Burger King",
                                                "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹350 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "American"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "166",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 18,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "18 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-23 05:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹129"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "70246",
                                                "name": "Starbucks Coffee",
                                                "cloudinaryImageId": "258fe8a3577877fbfe064095ed1d9dc3",
                                                "locality": "7th Block",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Beverages",
                                                    "Cafe",
                                                    "Snacks",
                                                    "Desserts",
                                                    "Bakery",
                                                    "Ice Cream"
                                                ],
                                                "avgRating": 4.4,
                                                "parentId": "195515",
                                                "avgRatingString": "4.4",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 18,
                                                    "lastMileTravel": 1.4,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "18 mins",
                                                    "lastMileTravelString": "1.4 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹219"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/starbucks-coffee-7th-block-koramangala-bangalore-70246",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "25620",
                                                "name": "KFC",
                                                "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
                                                "locality": "Intermediate Ring Road",
                                                "areaName": "Ejipura",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Biryani",
                                                    "American",
                                                    "Snacks",
                                                    "Fast Food"
                                                ],
                                                "avgRating": 4.2,
                                                "parentId": "547",
                                                "avgRatingString": "4.2",
                                                "totalRatingsString": "10K+",
                                                "sla": {
                                                    "deliveryTime": 16,
                                                    "lastMileTravel": 0.9,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "16 mins",
                                                    "lastMileTravelString": "0.9 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {},
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {}
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "40% OFF",
                                                    "subHeader": "UPTO ₹80"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/kfc-intermediate-ring-road-ejipura-bangalore-25620",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "140887",
                                                "name": "McDonald's",
                                                "cloudinaryImageId": "bb7ae131544c7d37e10fc5faf76f09d6",
                                                "locality": "Mantri Avenue",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹400 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "Beverages",
                                                    "Cafe",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.5,
                                                "parentId": "630",
                                                "avgRatingString": "4.5",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 16,
                                                    "lastMileTravel": 1.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "16 mins",
                                                    "lastMileTravelString": "1.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:45:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/mcdonalds-mantri-avenue-koramangala-bangalore-140887",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "607431",
                                                "name": "Samosa Party",
                                                "cloudinaryImageId": "ahwtmr2oa0xwaujup9wp",
                                                "locality": "Koramangala",
                                                "areaName": "Koramangala",
                                                "costForTwo": "₹150 for two",
                                                "cuisines": [
                                                    "Fast Food",
                                                    "Snacks",
                                                    "Beverages",
                                                    "Chaat",
                                                    "North Indian",
                                                    "Street Food",
                                                    "Sweets",
                                                    "Desserts",
                                                    "Punjabi",
                                                    "Bakery"
                                                ],
                                                "avgRating": 4.3,
                                                "parentId": "6364",
                                                "avgRatingString": "4.3",
                                                "totalRatingsString": "100+",
                                                "sla": {
                                                    "deliveryTime": 20,
                                                    "lastMileTravel": 1.5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "20 mins",
                                                    "lastMileTravelString": "1.5 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:00:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "60% OFF",
                                                    "subHeader": "UPTO ₹120"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-607431",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "565281",
                                                "name": "Wendy's",
                                                "cloudinaryImageId": "a2ec5418246b622ec4baa3bd051ef6ab",
                                                "locality": "KEB Layout",
                                                "areaName": "BTM 1st Stage",
                                                "costForTwo": "₹200 for two",
                                                "cuisines": [
                                                    "Burgers",
                                                    "American",
                                                    "Fast Food",
                                                    "Snacks",
                                                    "Beverages"
                                                ],
                                                "avgRating": 4.1,
                                                "parentId": "972",
                                                "avgRatingString": "4.1",
                                                "totalRatingsString": "1K+",
                                                "sla": {
                                                    "deliveryTime": 31,
                                                    "lastMileTravel": 3,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "31 mins",
                                                    "lastMileTravelString": "3.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 23:59:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {},
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "aggregatedDiscountInfoV3": {
                                                    "header": "ITEMS",
                                                    "subHeader": "AT ₹129"
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/wendys-keb-layout-btm-1st-stage-bangalore-565281",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        },
                                        {
                                            "info": {
                                                "id": "280216",
                                                "name": "Lavonne",
                                                "cloudinaryImageId": "udzufnegmtvimdypnfbk",
                                                "locality": "Indiranagar",
                                                "areaName": "Indiranagar",
                                                "costForTwo": "₹1000 for two",
                                                "cuisines": [
                                                    "Bakery",
                                                    "Desserts"
                                                ],
                                                "avgRating": 4.6,
                                                "parentId": "10530",
                                                "avgRatingString": "4.6",
                                                "totalRatingsString": "5K+",
                                                "sla": {
                                                    "deliveryTime": 32,
                                                    "lastMileTravel": 5,
                                                    "serviceability": "SERVICEABLE",
                                                    "slaString": "32 mins",
                                                    "lastMileTravelString": "5.0 km",
                                                    "iconType": "ICON_TYPE_EMPTY"
                                                },
                                                "availability": {
                                                    "nextCloseTime": "2023-12-22 22:40:00",
                                                    "opened": true
                                                },
                                                "badges": {
                                                    "imageBadges": [
                                                        {
                                                            "imageId": "newg.png",
                                                            "description": "Gourmet"
                                                        }
                                                    ],
                                                    "textExtendedBadges": [
                                                        {
                                                            "iconId": "guiltfree/GF_Logo_android_3x",
                                                            "shortDescription": "options available",
                                                            "fontColor": "#7E808C"
                                                        }
                                                    ]
                                                },
                                                "isOpen": true,
                                                "aggregatedDiscountInfoV2": {},
                                                "type": "F",
                                                "badgesV2": {
                                                    "entityBadges": {
                                                        "imageBased": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "Gourmet",
                                                                        "imageId": "newg.png"
                                                                    }
                                                                }
                                                            ]
                                                        },
                                                        "textBased": {},
                                                        "textExtendedBadges": {
                                                            "badgeObject": [
                                                                {
                                                                    "attributes": {
                                                                        "description": "",
                                                                        "fontColor": "#7E808C",
                                                                        "iconId": "guiltfree/GF_Logo_android_3x",
                                                                        "shortDescription": "options available"
                                                                    }
                                                                }
                                                            ]
                                                        }
                                                    }
                                                },
                                                "orderabilityCommunication": {
                                                    "title": {},
                                                    "subTitle": {},
                                                    "message": {},
                                                    "customIcon": {}
                                                },
                                                "differentiatedUi": {
                                                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                                    "differentiatedUiMediaDetails": {
                                                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                                        "lottie": {},
                                                        "video": {}
                                                    }
                                                },
                                                "reviewsSummary": {},
                                                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                                                "restaurantOfferPresentationInfo": {}
                                            },
                                            "analytics": {
                                                "context": "seo-data-427cdc3b-0489-418c-a699-6c66fdd0bb8d"
                                            },
                                            "cta": {
                                                "link": "https://www.swiggy.com/restaurants/lavonne-indiranagar-bangalore-280216",
                                                "text": "RESTAURANT_MENU",
                                                "type": "WEBLINK"
                                            },
                                            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
                                        }
                                    ],
                                    "theme": "SeoRestaurantListingGridWidget"
                                }
                            }
                        }
                    }
                },
            ],
        }
    })      
})