# vendors

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [delete10](#delete10) - Removes a provider.
* [delete8](#delete8) - Removes a person.
* [delete9](#delete9) - Removes a provider price list.
* [getAddress1](#getaddress1) - Returns address of a given provider.
* [getAllIds4](#getallids4) - Returns persons' internal identifiers.
* [getAllIds5](#getallids5) - Returns providers' internal identifiers.
* [getById4](#getbyid4) - Returns person details.
* [getById5](#getbyid5) - Returns provider details.
* [getCompetencies](#getcompetencies) - Returns competencies of a given provider.
* [getContact2](#getcontact2) - Returns contact of a given person.
* [getContact3](#getcontact3) - Returns contact of a given provider.
* [getCorrespondenceAddress1](#getcorrespondenceaddress1) - Returns correspondence address of a given provider.
* [getCustomFields2](#getcustomfields2) - Returns custom fields of a given person.
* [getCustomFields3](#getcustomfields3) - Returns custom fields of a given provider.
* [sendInvitations](#sendinvitations) - Sends invitation to Vendor Portal.
* [sendInvitations1](#sendinvitations1) - Sends invitations to Vendor Portal.

## delete10

Removes a provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete10Request;
import org.openapis.openapi.models.operations.Delete10Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete10Request req = new Delete10Request(185816L);            

            Delete10Response res = sdk.vendors.delete10(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete8

Removes a person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete8Request;
import org.openapis.openapi.models.operations.Delete8Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete8Request req = new Delete8Request(771241L);            

            Delete8Response res = sdk.vendors.delete8(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## delete9

Removes a provider price list.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Delete9Request;
import org.openapis.openapi.models.operations.Delete9Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Delete9Request req = new Delete9Request(104736L);            

            Delete9Response res = sdk.vendors.delete9(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAddress1

Returns address of a given provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAddress1Request;
import org.openapis.openapi.models.operations.GetAddress1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAddress1Request req = new GetAddress1Request(278329L);            

            GetAddress1Response res = sdk.vendors.getAddress1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds4

Returns persons' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds4Request;
import org.openapis.openapi.models.operations.GetAllIds4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds4Request req = new GetAllIds4Request() {{
                updatedSince = 116558L;
            }};            

            GetAllIds4Response res = sdk.vendors.getAllIds4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllIds5

Returns providers' internal identifiers.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllIds5Request;
import org.openapis.openapi.models.operations.GetAllIds5Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllIds5Request req = new GetAllIds5Request() {{
                updatedSince = 139133L;
            }};            

            GetAllIds5Response res = sdk.vendors.getAllIds5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById4

Returns person details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById4Request;
import org.openapis.openapi.models.operations.GetById4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById4Request req = new GetById4Request(357639L);            

            GetById4Response res = sdk.vendors.getById4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById5

Returns provider details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById5Request;
import org.openapis.openapi.models.operations.GetById5Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById5Request req = new GetById5Request(701441L) {{
                embed = "alias";
            }};            

            GetById5Response res = sdk.vendors.getById5(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCompetencies

Returns competencies of a given provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCompetenciesRequest;
import org.openapis.openapi.models.operations.GetCompetenciesResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCompetenciesRequest req = new GetCompetenciesRequest(624498L);            

            GetCompetenciesResponse res = sdk.vendors.getCompetencies(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContact2

Returns contact of a given person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContact2Request;
import org.openapis.openapi.models.operations.GetContact2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContact2Request req = new GetContact2Request(424854L);            

            GetContact2Response res = sdk.vendors.getContact2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getContact3

Returns contact of a given provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetContact3Request;
import org.openapis.openapi.models.operations.GetContact3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetContact3Request req = new GetContact3Request(35581L);            

            GetContact3Response res = sdk.vendors.getContact3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCorrespondenceAddress1

Returns correspondence address of a given provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCorrespondenceAddress1Request;
import org.openapis.openapi.models.operations.GetCorrespondenceAddress1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCorrespondenceAddress1Request req = new GetCorrespondenceAddress1Request(664197L);            

            GetCorrespondenceAddress1Response res = sdk.vendors.getCorrespondenceAddress1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields2

Returns custom fields of a given person.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields2Request;
import org.openapis.openapi.models.operations.GetCustomFields2Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields2Request req = new GetCustomFields2Request(388169L);            

            GetCustomFields2Response res = sdk.vendors.getCustomFields2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields3

Returns custom fields of a given provider.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields3Request;
import org.openapis.openapi.models.operations.GetCustomFields3Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields3Request req = new GetCustomFields3Request(401688L);            

            GetCustomFields3Response res = sdk.vendors.getCustomFields3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendInvitations

Sends invitation to Vendor Portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendInvitationsRequest;
import org.openapis.openapi.models.operations.SendInvitationsResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendInvitationsRequest req = new SendInvitationsRequest(555679L);            

            SendInvitationsResponse res = sdk.vendors.sendInvitations(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## sendInvitations1

Sends invitations to Vendor Portal.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.SendInvitations1Request;
import org.openapis.openapi.models.operations.SendInvitations1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            SendInvitations1Request req = new SendInvitations1Request(85794L);            

            SendInvitations1Response res = sdk.vendors.sendInvitations1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
