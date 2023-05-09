# users

## Overview

To change the description use /examples/TagsDescriptions.json

### Available Operations

* [changePassword](#changepassword) - Sets user's password to a new value.
* [getAllNamesWithIds1](#getallnameswithids1) - Returns list of simple users representations
* [getById6](#getbyid6) - Returns user details.
* [getCustomField1](#getcustomfield1) - Returns custom field of a given user.
* [getCustomFields4](#getcustomfields4) - Returns custom fields of a given user.
* [getMe](#getme) - Returns currently signed in user details.
* [getTimeZone](#gettimezone) - Returns time zone preferred by user currently signed in.
* [updateCustomField1](#updatecustomfield1) - Updates given custom field of a given user.
* [updateCustomFields2](#updatecustomfields2) - Updates custom fields of a given user.
* [update3](#update3) - Updates an existing user.

## changePassword

Sets user's password to a new value.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ChangePasswordRequest;
import org.openapis.openapi.models.operations.ChangePasswordRequestBody;
import org.openapis.openapi.models.operations.ChangePasswordResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            ChangePasswordRequest req = new ChangePasswordRequest(739508L) {{
                requestBody = new ChangePasswordRequestBody() {{
                    newPassword = "doloribus";
                    oldPassword = "facilis";
                }};;
            }};            

            ChangePasswordResponse res = sdk.users.changePassword(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getAllNamesWithIds1

Returns list of simple users representations

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetAllNamesWithIds1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetAllNamesWithIds1Response res = sdk.users.getAllNamesWithIds1();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getById6

Returns user details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetById6Request;
import org.openapis.openapi.models.operations.GetById6Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetById6Request req = new GetById6Request(697330L);            

            GetById6Response res = sdk.users.getById6(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomField1

Returns custom field of a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomField1Request;
import org.openapis.openapi.models.operations.GetCustomField1Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomField1Request req = new GetCustomField1Request("itaque", 389548L);            

            GetCustomField1Response res = sdk.users.getCustomField1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCustomFields4

Returns custom fields of a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCustomFields4Request;
import org.openapis.openapi.models.operations.GetCustomFields4Response;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetCustomFields4Request req = new GetCustomFields4Request(601714L);            

            GetCustomFields4Response res = sdk.users.getCustomFields4(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getMe

Returns currently signed in user details.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetMeResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetMeResponse res = sdk.users.getMe();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getTimeZone

Returns time zone preferred by user currently signed in.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetTimeZoneResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            GetTimeZoneResponse res = sdk.users.getTimeZone();

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomField1

Updates given custom field of a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomField1Request;
import org.openapis.openapi.models.operations.UpdateCustomField1Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomField1Request req = new UpdateCustomField1Request(                new CustomFieldDTO() {{
                                key = "modi";
                                name = "Irvin Rippin";
                                type = CustomFieldDTOTypeEnum.SELECTION;
                                value = new java.util.HashMap<String, Object>() {{
                                    put("recusandae", "quod");
                                    put("id", "saepe");
                                }};
                            }};, "autem", 779409L);            

            UpdateCustomField1Response res = sdk.users.updateCustomField1(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## updateCustomFields2

Updates custom fields of a given user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.UpdateCustomFields2Request;
import org.openapis.openapi.models.operations.UpdateCustomFields2Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            UpdateCustomFields2Request req = new UpdateCustomFields2Request(                new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                add(new CustomFieldDTO() {{
                                    key = "illum";
                                    name = "Desiree Quigley";
                                    type = CustomFieldDTOTypeEnum.SELECTION;
                                    value = new java.util.HashMap<String, Object>() {{
                                        put("distinctio", "pariatur");
                                        put("ad", "facere");
                                        put("laborum", "eveniet");
                                        put("laborum", "incidunt");
                                    }};
                                }}),
                            }}, 802356L);            

            UpdateCustomFields2Response res = sdk.users.updateCustomFields2(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## update3

Updates an existing user.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.Update3Request;
import org.openapis.openapi.models.operations.Update3Response;
import org.openapis.openapi.models.shared.CustomFieldDTO;
import org.openapis.openapi.models.shared.CustomFieldDTOTypeEnum;
import org.openapis.openapi.models.shared.Security;
import org.openapis.openapi.models.shared.UserDTO;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security() {{
                    xAuthAccessToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            Update3Request req = new Update3Request(                new UserDTO() {{
                                customFields = new org.openapis.openapi.models.shared.CustomFieldDTO[]{{
                                    add(new CustomFieldDTO() {{
                                        key = "alias";
                                        name = "Joanna MacGyver";
                                        type = CustomFieldDTOTypeEnum.CHECKBOX;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("quo", "perferendis");
                                            put("fugit", "aliquid");
                                        }};
                                    }}),
                                    add(new CustomFieldDTO() {{
                                        key = "magnam";
                                        name = "Lynne Weissnat";
                                        type = CustomFieldDTOTypeEnum.CHECKBOX;
                                        value = new java.util.HashMap<String, Object>() {{
                                            put("error", "mollitia");
                                            put("magnam", "nostrum");
                                            put("esse", "corrupti");
                                            put("fuga", "facere");
                                        }};
                                    }}),
                                }};
                                email = "Ayla.OConnell4@hotmail.com";
                                firstName = "Alexandrea";
                                gender = "male";
                                id = 901008L;
                                lastName = "Schoen";
                                login = "consequatur";
                                mobilePhone = "eaque";
                                phone = "(775) 218-1870";
                                positionName = "excepturi";
                                timeZoneId = "a";
                                userGroupName = "maiores";
                            }};, 514462L);            

            Update3Response res = sdk.users.update3(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
