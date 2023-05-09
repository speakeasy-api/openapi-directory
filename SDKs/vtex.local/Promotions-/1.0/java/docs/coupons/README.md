# coupons

### Available Operations

* [archivebycouponcode](#archivebycouponcode) - Archive coupon by coupon code
* [getall](#getall) - Get all coupons
* [getarchivedbycouponcode](#getarchivedbycouponcode) - Get archived coupon by coupon code
* [getbycouponcode](#getbycouponcode) - Get coupon by coupon code
* [getusage](#getusage) - Get coupon usage
* [massiveGeneration](#massivegeneration) - Coupon Massive Generation
* [unarchivebycouponcode](#unarchivebycouponcode) - Unarchive coupon by coupon code
* [update](#update) - Update coupon
* [postApiRnbPvtCoupon](#postapirnbpvtcoupon) - Create coupon
* [postApiRnbPvtMultipleCoupons](#postapirnbpvtmultiplecoupons) - Create multiple coupons

## archivebycouponcode

Archives a specifc coupon by its coupon code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ArchivebycouponcodeRequest;
import org.openapis.openapi.models.operations.ArchivebycouponcodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("reiciendis", "doloremque") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ArchivebycouponcodeRequest req = new ArchivebycouponcodeRequest("repudiandae", "dicta", "test");            

            ArchivebycouponcodeResponse res = sdk.coupons.archivebycouponcode(req);

            if (res.couponCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getall


> Check the new [Promotions onboarding guide](https://developers.vtex.com/vtex-rest-api/docs/promotions-overview). We created this guide to improve the onboarding experience for developers at VTEX. It assembles all documentation on our Developer Portal about Promotions and is organized by focusing on the developer's journey.

 Retrieves all coupons from an account.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetallRequest;
import org.openapis.openapi.models.operations.GetallResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("accusantium", "beatae") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetallRequest req = new GetallRequest("dolores", "enim");            

            GetallResponse res = sdk.coupons.getall(req);

            if (res.getall200ApplicationJSONObjects != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getarchivedbycouponcode

Retrieves a specific archived coupon by its coupon code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetarchivedbycouponcodeRequest;
import org.openapis.openapi.models.operations.GetarchivedbycouponcodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("laboriosam", "velit") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetarchivedbycouponcodeRequest req = new GetarchivedbycouponcodeRequest("a", "molestias", "promo10");            

            GetarchivedbycouponcodeResponse res = sdk.coupons.getarchivedbycouponcode(req);

            if (res.getarchivedbycouponcode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getbycouponcode

Retrieves a specific coupon by its coupon code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetbycouponcodeRequest;
import org.openapis.openapi.models.operations.GetbycouponcodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("magnam", "saepe") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetbycouponcodeRequest req = new GetbycouponcodeRequest("consequuntur", "occaecati", "promo10");            

            GetbycouponcodeResponse res = sdk.coupons.getbycouponcode(req);

            if (res.getbycouponcode200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getusage

Retrieves information about the coupon usage.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetusageRequest;
import org.openapis.openapi.models.operations.GetusageResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("officiis", "perspiciatis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetusageRequest req = new GetusageRequest("in", "adipisci", "test");            

            GetusageResponse res = sdk.coupons.getusage(req);

            if (res.getusage200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## massiveGeneration

Generates a massive amount of coupons

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.MassiveGenerationRequest;
import org.openapis.openapi.models.operations.MassiveGenerationRequestBody;
import org.openapis.openapi.models.operations.MassiveGenerationResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("eveniet", "occaecati") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            MassiveGenerationRequest req = new MassiveGenerationRequest("consequuntur", "fugit",                 new MassiveGenerationRequestBody("ctest", "00:00:00", 1L, "cupom3", "cupom3");, 10L);            

            MassiveGenerationResponse res = sdk.coupons.massiveGeneration(req);

            if (res.couponCodes != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## unarchivebycouponcode

Unarchives a specifc coupon by its coupon code.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UnarchivebycouponcodeRequest;
import org.openapis.openapi.models.operations.UnarchivebycouponcodeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("id", "quis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UnarchivebycouponcodeRequest req = new UnarchivebycouponcodeRequest("reprehenderit", "error", "test");            

            UnarchivebycouponcodeResponse res = sdk.coupons.unarchivebycouponcode(req);

            if (res.couponCode != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update

Updates information of a specific coupon.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateRequest;
import org.openapis.openapi.models.operations.UpdateRequestBody;
import org.openapis.openapi.models.operations.UpdateResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("illo", "corporis") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateRequest req = new UpdateRequest("quidem", "eveniet",                 new UpdateRequestBody("test", "00:00:00", false, 10L, "coupon3", "coupon3"););            

            UpdateResponse res = sdk.coupons.update(req);

            if (res.update200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiRnbPvtCoupon

Creates a single new coupon.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiRnbPvtCouponRequest;
import org.openapis.openapi.models.operations.PostApiRnbPvtCouponRequestBody;
import org.openapis.openapi.models.operations.PostApiRnbPvtCouponResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("non", "vero") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiRnbPvtCouponRequest req = new PostApiRnbPvtCouponRequest("doloremque", "iure") {{
                requestBody = new PostApiRnbPvtCouponRequestBody("summersale10", "00:00:00", 10L, "email") {{
                    utmCampaign = "summer";
                }};;
            }};            

            PostApiRnbPvtCouponResponse res = sdk.coupons.postApiRnbPvtCoupon(req);

            if (res.postApiRnbPvtCoupon201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## postApiRnbPvtMultipleCoupons

Creates multiple coupons with different coupon codes. This endpoint has a throttling of 60 requests per minute.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.PostApiRnbPvtMultipleCouponsRequest;
import org.openapis.openapi.models.operations.PostApiRnbPvtMultipleCouponsRequestBody;
import org.openapis.openapi.models.operations.PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration;
import org.openapis.openapi.models.operations.PostApiRnbPvtMultipleCouponsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("ipsa", "totam") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            PostApiRnbPvtMultipleCouponsRequest req = new PostApiRnbPvtMultipleCouponsRequest("quae", "molestiae") {{
                requestBody = new org.openapis.openapi.models.operations.PostApiRnbPvtMultipleCouponsRequestBody[]{{
                    add(new PostApiRnbPvtMultipleCouponsRequestBody(                new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "iure", "coupon3") {{
                                        isArchived = false;
                                    }};, 1L) {{
                        couponConfiguration = new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "cum", "coupon3") {{
                            couponCode = "test";
                            expirationIntervalPerUse = "00:00:00";
                            isArchived = false;
                            maxItemsPerClient = 10L;
                            utmCampaign = "qui";
                            utmSource = "coupon3";
                        }};
                        quantity = 1L;
                    }}),
                    add(new PostApiRnbPvtMultipleCouponsRequestBody(                new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "laborum", "coupon3") {{
                                        isArchived = false;
                                    }};, 1L) {{
                        couponConfiguration = new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "ratione", "coupon3") {{
                            couponCode = "test";
                            expirationIntervalPerUse = "00:00:00";
                            isArchived = false;
                            maxItemsPerClient = 10L;
                            utmCampaign = "necessitatibus";
                            utmSource = "coupon3";
                        }};
                        quantity = 1L;
                    }}),
                    add(new PostApiRnbPvtMultipleCouponsRequestBody(                new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "rem", "coupon3") {{
                                        isArchived = false;
                                    }};, 1L) {{
                        couponConfiguration = new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "voluptatum", "coupon3") {{
                            couponCode = "test";
                            expirationIntervalPerUse = "00:00:00";
                            isArchived = false;
                            maxItemsPerClient = 10L;
                            utmCampaign = "distinctio";
                            utmSource = "coupon3";
                        }};
                        quantity = 1L;
                    }}),
                    add(new PostApiRnbPvtMultipleCouponsRequestBody(                new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "repellat", "coupon3") {{
                                        isArchived = false;
                                    }};, 1L) {{
                        couponConfiguration = new PostApiRnbPvtMultipleCouponsRequestBodyCouponConfiguration("test", "00:00:00", 10L, "ad", "coupon3") {{
                            couponCode = "test";
                            expirationIntervalPerUse = "00:00:00";
                            isArchived = false;
                            maxItemsPerClient = 10L;
                            utmCampaign = "aliquam";
                            utmSource = "coupon3";
                        }};
                        quantity = 1L;
                    }}),
                }};
            }};            

            PostApiRnbPvtMultipleCouponsResponse res = sdk.coupons.postApiRnbPvtMultipleCoupons(req);

            if (res.items != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
