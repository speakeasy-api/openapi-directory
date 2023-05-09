# calls

### Available Operations

* [callAnswer](#callanswer) - Answer call (On supported devices)
* [callHold](#callhold) - Put call on hold
* [callTransfer](#calltransfer) - Transfer call
* [callUnold](#callunold) - Unhold
* [callVMTransfer](#callvmtransfer) - Send call to voicemail
* [createCall](#createcall) - Place a call
* [destroyCall](#destroycall) - End a call
* [getCallsCount](#getcallscount) - Get calls count
* [getRoles](#getroles) - Get a call
* [listCalls](#listcalls) - List active calls

## callAnswer

Answer call (On supported devices)

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CallAnswerRequest;
import org.openapis.openapi.models.operations.CallAnswerResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CallAnswerRequest req = new CallAnswerRequest("corrupti");            

            CallAnswerResponse res = sdk.calls.callAnswer(req);

            if (res.call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## callHold

Put call on hold

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CallHoldRequest;
import org.openapis.openapi.models.operations.CallHoldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CallHoldRequest req = new CallHoldRequest("provident");            

            CallHoldResponse res = sdk.calls.callHold(req);

            if (res.call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## callTransfer

Transfer call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CallTransferRequest;
import org.openapis.openapi.models.operations.CallTransferResponse;
import org.openapis.openapi.models.shared.CallTransfer;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CallTransferRequest req = new CallTransferRequest(                new CallTransfer("distinctio");, "quibusdam");            

            CallTransferResponse res = sdk.calls.callTransfer(req);

            if (res.call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## callUnold

Unhold

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CallUnoldRequest;
import org.openapis.openapi.models.operations.CallUnoldResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CallUnoldRequest req = new CallUnoldRequest("unde");            

            CallUnoldResponse res = sdk.calls.callUnold(req);

            if (res.call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## callVMTransfer

Send call to voicemail

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CallVMTransferRequest;
import org.openapis.openapi.models.operations.CallVMTransferResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            CallVMTransferRequest req = new CallVMTransferRequest("nulla");            

            CallVMTransferResponse res = sdk.calls.callVMTransfer(req);

            if (res.call != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## createCall

Place a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.CreateCallResponse;
import org.openapis.openapi.models.shared.CallCreate;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            org.openapis.openapi.models.shared.CallCreate req = new CallCreate("corrupti");            

            CreateCallResponse res = sdk.calls.createCall(req);

            if (res.calls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## destroyCall

End a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.DestroyCallRequest;
import org.openapis.openapi.models.operations.DestroyCallResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            DestroyCallRequest req = new DestroyCallRequest("illum");            

            DestroyCallResponse res = sdk.calls.destroyCall(req);

            if (res.calls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getCallsCount

Get calls count

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetCallsCountDirectionEnum;
import org.openapis.openapi.models.operations.GetCallsCountRequest;
import org.openapis.openapi.models.operations.GetCallsCountResponse;
import org.openapis.openapi.models.operations.GetCallsCountStatesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetCallsCountRequest req = new GetCallsCountRequest() {{
                direction = GetCallsCountDirectionEnum.INBOUND;
                fromDate = 623564L;
                states = GetCallsCountStatesEnum.HELD;
                toDate = 384382L;
            }};            

            GetCallsCountResponse res = sdk.calls.getCallsCount(req);

            if (res.eventsCount != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## getRoles

Get a call

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.GetRolesRequest;
import org.openapis.openapi.models.operations.GetRolesResponse;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            GetRolesRequest req = new GetRolesRequest("iure");            

            GetRolesResponse res = sdk.calls.getRoles(req);

            if (res.calls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```

## listCalls

Lists currently active calls

### Example Usage

```java
package hello.world;

import org.openapis.openapi.SDK;
import org.openapis.openapi.models.operations.ListCallsDirectionEnum;
import org.openapis.openapi.models.operations.ListCallsOrderEnum;
import org.openapis.openapi.models.operations.ListCallsRequest;
import org.openapis.openapi.models.operations.ListCallsResponse;
import org.openapis.openapi.models.operations.ListCallsStatesEnum;

public class Application {
    public static void main(String[] args) {
        try {
            SDK sdk = SDK.builder()
                .build();

            ListCallsRequest req = new ListCallsRequest() {{
                direction = ListCallsDirectionEnum.INBOUND;
                fromDate = 891773L;
                offset = 56713L;
                order = ListCallsOrderEnum.ASC;
                size = 272656L;
                sort = "suscipit";
                states = ListCallsStatesEnum.ACTIVE;
                toDate = 791725L;
            }};            

            ListCallsResponse res = sdk.calls.listCalls(req);

            if (res.calls != null) {
                // handle response
            }
        } catch (Exception e) {
            // handle exception
        }
    }
}
```
