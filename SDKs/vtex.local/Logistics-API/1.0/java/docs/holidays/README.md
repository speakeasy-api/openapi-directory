# holidays

### Available Operations

* [allHolidays](#allholidays) - List all holidays
* [createUpdateHoliday](#createupdateholiday) - Create/update holiday
* [holiday](#holiday) - Delete holiday
* [holidayById](#holidaybyid) - List holiday by ID

## allHolidays

Lists information of all holidays.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.AllHolidaysRequest;
import org.openapis.openapi.models.operations.AllHolidaysResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("mollitia", "laborum") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            AllHolidaysRequest req = new AllHolidaysRequest("dolores", "dolorem");            

            AllHolidaysResponse res = sdk.holidays.allHolidays(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createUpdateHoliday

Creates or updates holidays through holiday ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateUpdateHolidayCreateUpdateHolidayRequest;
import org.openapis.openapi.models.operations.CreateUpdateHolidayRequest;
import org.openapis.openapi.models.operations.CreateUpdateHolidayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("corporis", "explicabo") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            CreateUpdateHolidayRequest req = new CreateUpdateHolidayRequest("nobis", "enim",                 new CreateUpdateHolidayCreateUpdateHolidayRequest("omnis", "nemo");, "minima");            

            CreateUpdateHolidayResponse res = sdk.holidays.createUpdateHoliday(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## holiday

Deletes given holidays set up in your store.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HolidayRequest;
import org.openapis.openapi.models.operations.HolidayResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("excepturi", "accusantium") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            HolidayRequest req = new HolidayRequest("iure", "culpa", "doloribus");            

            HolidayResponse res = sdk.holidays.holiday(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## holidayById

Lists holiday's information by holiday ID.

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.HolidayByIdRequest;
import org.openapis.openapi.models.operations.HolidayByIdResponse;
import org.openapis.openapi.models.shared.Security;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .setSecurity(new Security("sapiente", "architecto") {{
                    appKey = "YOUR_API_KEY_HERE";
                    appToken = "YOUR_API_KEY_HERE";
                }})
                .build();

            HolidayByIdRequest req = new HolidayByIdRequest("mollitia", "dolorem", "culpa");            

            HolidayByIdResponse res = sdk.holidays.holidayById(req);

            if (res.statusCode == 200) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
