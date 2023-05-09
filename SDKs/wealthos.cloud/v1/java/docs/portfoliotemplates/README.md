# portfolioTemplates

## Overview

A portfolio template captures how an investor’s cash (once transferred to a pot) should be automatically invested by the system. A portfolio template consists of a set of investment products and the ratios in which these products must be bought, once cleared cash is available to invest. 

For example, a portfolio template ‘PT1’ has the following template

Investment Product | Ratio
-------------------|-------
Investment Product A | 20%
Investment Product B | 30%
Investment Product C | 50%

If GBP 100 is transferred to a pot linked to Portfolio template PT1, the following buy orders will be triggered

* BUY Investment Product A for GBP 20
* BUY Investment Product B for GBP 30
* BUY Investment Product C for GBP 50

### Portfolio Creation

Portfolio Templates can be created by the Wealth Manger (generic set of portfolio templates created in WealthOS and a single template will be assigned to an Investor’s pot based on suitability - e.g. robo advisory) 

<!-- If a Portfolio template is created by an investor then the request must have `owner : "investor"` and `investor_id` populated with the relevant investor ID.  -->

The ratios of investment products within a portfolio template must add up to a 100% - if this is not the case, the system will reject the portfolio creation or update. 

Once cleared cash is available in a pot, the system can be instructed to trigger investment product buy requests based on the portfolio template linked to the pot. 



### Available Operations

* [createPortfolioTemplate](#createportfoliotemplate) - Create new Portfolio Template
* [getAllPortfolioTemplates](#getallportfoliotemplates) - Get all the Portfolio templates
* [getPortfolioTemplate](#getportfoliotemplate) - Retrive existing Portfolio template
* [updatePortfolioTemplate](#updateportfoliotemplate) - Update existing Portfolio template

## createPortfolioTemplate

Create new Portfolio Template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreatePortfolioTemplateRequest;
import org.openapis.openapi.models.operations.CreatePortfolioTemplateRequestBodyInput;
import org.openapis.openapi.models.operations.CreatePortfolioTemplateRequestBodyRatios;
import org.openapis.openapi.models.operations.CreatePortfolioTemplateResponse;
import org.openapis.openapi.models.operations.CreatePortfolioTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CreatePortfolioTemplateRequest req = new CreatePortfolioTemplateRequest(                new CreatePortfolioTemplateRequestBodyInput("dolore",                 new org.openapis.openapi.models.operations.CreatePortfolioTemplateRequestBodyRatios[]{{
                                                add(new CreatePortfolioTemplateRequestBodyRatios("natus", "impedit") {{
                                                    investmentProductId = "illum";
                                                    ratio = "sequi";
                                                }}),
                                                add(new CreatePortfolioTemplateRequestBodyRatios("exercitationem", "nulla") {{
                                                    investmentProductId = "aut";
                                                    ratio = "voluptatibus";
                                                }}),
                                                add(new CreatePortfolioTemplateRequestBodyRatios("maiores", "doloribus") {{
                                                    investmentProductId = "fugit";
                                                    ratio = "porro";
                                                }}),
                                                add(new CreatePortfolioTemplateRequestBodyRatios("ducimus", "alias") {{
                                                    investmentProductId = "iusto";
                                                    ratio = "eligendi";
                                                }}),
                                            }});, "officia");            

            CreatePortfolioTemplateResponse res = sdk.portfolioTemplates.createPortfolioTemplate(req, new CreatePortfolioTemplateSecurity("tempora") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.createPortfolioTemplate201ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllPortfolioTemplates

Get all the portfolio templates

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllPortfolioTemplatesRequest;
import org.openapis.openapi.models.operations.GetAllPortfolioTemplatesResponse;
import org.openapis.openapi.models.operations.GetAllPortfolioTemplatesSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetAllPortfolioTemplatesRequest req = new GetAllPortfolioTemplatesRequest("ipsam");            

            GetAllPortfolioTemplatesResponse res = sdk.portfolioTemplates.getAllPortfolioTemplates(req, new GetAllPortfolioTemplatesSecurity("ea") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getAllPortfolioTemplates200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getPortfolioTemplate

Retrive existing Portfolio template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetPortfolioTemplateRequest;
import org.openapis.openapi.models.operations.GetPortfolioTemplateResponse;
import org.openapis.openapi.models.operations.GetPortfolioTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetPortfolioTemplateRequest req = new GetPortfolioTemplateRequest("aspernatur", "vel");            

            GetPortfolioTemplateResponse res = sdk.portfolioTemplates.getPortfolioTemplate(req, new GetPortfolioTemplateSecurity("possimus") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.getPortfolioTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updatePortfolioTemplate

Update existing Portfolio template

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdatePortfolioTemplateRequest;
import org.openapis.openapi.models.operations.UpdatePortfolioTemplateRequestBody;
import org.openapis.openapi.models.operations.UpdatePortfolioTemplateRequestBodyRatios;
import org.openapis.openapi.models.operations.UpdatePortfolioTemplateResponse;
import org.openapis.openapi.models.operations.UpdatePortfolioTemplateSecurity;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            UpdatePortfolioTemplateRequest req = new UpdatePortfolioTemplateRequest(                new UpdatePortfolioTemplateRequestBody(1L) {{
                                portfolioName = "magnam";
                                ratios = new org.openapis.openapi.models.operations.UpdatePortfolioTemplateRequestBodyRatios[]{{
                                    add(new UpdatePortfolioTemplateRequestBodyRatios("dicta", "dolor") {{
                                        investmentProductId = "ex";
                                        ratio = "laudantium";
                                    }}),
                                }};
                            }};, "maiores", "quasi");            

            UpdatePortfolioTemplateResponse res = sdk.portfolioTemplates.updatePortfolioTemplate(req, new UpdatePortfolioTemplateSecurity("ex") {{
                apiSecretKey = "YOUR_API_KEY_HERE";
            }});

            if (res.updatePortfolioTemplate200ApplicationJSONObject != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
