# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install git+https://github.com/speakeasy-api/openapi-directory.git#subdirectory=SDKs/walletobjects.googleapis.com/pay-passes/v1/python
```
<!-- End SDK Installation -->

## SDK Example Usage
<!-- Start SDK Example Usage -->
```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()


req = operations.WalletobjectsEventticketclassAddmessageRequest(
    dollar_xgafv="2",
    add_message_request=shared.AddMessageRequest(
        message=shared.Message(
            body="provident",
            display_interval=shared.TimeInterval(
                end=shared.DateTime(
                    date_="distinctio",
                ),
                kind="quibusdam",
                start=shared.DateTime(
                    date_="unde",
                ),
            ),
            header="nulla",
            id="corrupti",
            kind="illum",
            localized_body=shared.LocalizedString(
                default_value=shared.TranslatedString(
                    kind="vel",
                    language="error",
                    value="deserunt",
                ),
                kind="suscipit",
                translated_values=[
                    shared.TranslatedString(
                        kind="magnam",
                        language="debitis",
                        value="ipsa",
                    ),
                    shared.TranslatedString(
                        kind="delectus",
                        language="tempora",
                        value="suscipit",
                    ),
                ],
            ),
            localized_header=shared.LocalizedString(
                default_value=shared.TranslatedString(
                    kind="molestiae",
                    language="minus",
                    value="placeat",
                ),
                kind="voluptatum",
                translated_values=[
                    shared.TranslatedString(
                        kind="excepturi",
                        language="nisi",
                        value="recusandae",
                    ),
                    shared.TranslatedString(
                        kind="temporibus",
                        language="ab",
                        value="quis",
                    ),
                ],
            ),
            message_type="MESSAGE_TYPE_UNSPECIFIED",
        ),
    ),
    access_token="deserunt",
    alt="json",
    callback="ipsam",
    fields_="repellendus",
    key="sapiente",
    oauth_token="quo",
    pretty_print=False,
    quota_user="odit",
    resource_id="at",
    upload_type="at",
    upload_protocol="maiores",
)
    
res = s.eventticketclass.walletobjects_eventticketclass_addmessage(req, operations.WalletobjectsEventticketclassAddmessageSecurity(
    oauth2="Bearer YOUR_ACCESS_TOKEN_HERE",
    oauth2c="Bearer YOUR_ACCESS_TOKEN_HERE",
))

if res.event_ticket_class_add_message_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### eventticketclass

* `walletobjects_eventticketclass_addmessage` - Adds a message to the event ticket class referenced by the given class ID.
* `walletobjects_eventticketclass_get` - Returns the event ticket class with the given class ID.
* `walletobjects_eventticketclass_insert` - Inserts an event ticket class with the given ID and properties.
* `walletobjects_eventticketclass_list` - Returns a list of all event ticket classes for a given issuer ID.
* `walletobjects_eventticketclass_patch` - Updates the event ticket class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_eventticketclass_update` - Updates the event ticket class referenced by the given class ID.

### eventticketobject

* `walletobjects_eventticketobject_addmessage` - Adds a message to the event ticket object referenced by the given object ID.
* `walletobjects_eventticketobject_get` - Returns the event ticket object with the given object ID.
* `walletobjects_eventticketobject_insert` - Inserts an event ticket object with the given ID and properties.
* `walletobjects_eventticketobject_list` - Returns a list of all event ticket objects for a given issuer ID.
* `walletobjects_eventticketobject_modifylinkedofferobjects` - Modifies linked offer objects for the event ticket object with the given ID.
* `walletobjects_eventticketobject_patch` - Updates the event ticket object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_eventticketobject_update` - Updates the event ticket object referenced by the given object ID.

### flightclass

* `walletobjects_flightclass_addmessage` - Adds a message to the flight class referenced by the given class ID.
* `walletobjects_flightclass_get` - Returns the flight class with the given class ID.
* `walletobjects_flightclass_insert` - Inserts an flight class with the given ID and properties.
* `walletobjects_flightclass_list` - Returns a list of all flight classes for a given issuer ID.
* `walletobjects_flightclass_patch` - Updates the flight class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_flightclass_update` - Updates the flight class referenced by the given class ID.

### flightobject

* `walletobjects_flightobject_addmessage` - Adds a message to the flight object referenced by the given object ID.
* `walletobjects_flightobject_get` - Returns the flight object with the given object ID.
* `walletobjects_flightobject_insert` - Inserts an flight object with the given ID and properties.
* `walletobjects_flightobject_list` - Returns a list of all flight objects for a given issuer ID.
* `walletobjects_flightobject_patch` - Updates the flight object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_flightobject_update` - Updates the flight object referenced by the given object ID.

### genericclass

* `walletobjects_genericclass_get` - Returns the generic class with the given class ID.
* `walletobjects_genericclass_insert` - Inserts a generic class with the given ID and properties.
* `walletobjects_genericclass_list` - Returns a list of all generic classes for a given issuer ID.
* `walletobjects_genericclass_patch` - Updates the generic class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_genericclass_update` - Updates the Generic class referenced by the given class ID.

### genericobject

* `walletobjects_genericobject_get` - Returns the generic object with the given object ID.
* `walletobjects_genericobject_insert` - Inserts a generic object with the given ID and properties.
* `walletobjects_genericobject_list` - Returns a list of all generic objects for a given issuer ID.
* `walletobjects_genericobject_patch` - Updates the generic object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_genericobject_update` - Updates the generic object referenced by the given object ID.

### giftcardclass

* `walletobjects_giftcardclass_addmessage` - Adds a message to the gift card class referenced by the given class ID.
* `walletobjects_giftcardclass_get` - Returns the gift card class with the given class ID.
* `walletobjects_giftcardclass_insert` - Inserts an gift card class with the given ID and properties.
* `walletobjects_giftcardclass_list` - Returns a list of all gift card classes for a given issuer ID.
* `walletobjects_giftcardclass_patch` - Updates the gift card class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_giftcardclass_update` - Updates the gift card class referenced by the given class ID.

### giftcardobject

* `walletobjects_giftcardobject_addmessage` - Adds a message to the gift card object referenced by the given object ID.
* `walletobjects_giftcardobject_get` - Returns the gift card object with the given object ID.
* `walletobjects_giftcardobject_insert` - Inserts an gift card object with the given ID and properties.
* `walletobjects_giftcardobject_list` - Returns a list of all gift card objects for a given issuer ID.
* `walletobjects_giftcardobject_patch` - Updates the gift card object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_giftcardobject_update` - Updates the gift card object referenced by the given object ID.

### issuer

* `walletobjects_issuer_get` - Returns the issuer with the given issuer ID.
* `walletobjects_issuer_insert` - Inserts an issuer with the given ID and properties.
* `walletobjects_issuer_list` - Returns a list of all issuers shared to the caller.
* `walletobjects_issuer_patch` - Updates the issuer referenced by the given issuer ID. This method supports patch semantics.
* `walletobjects_issuer_update` - Updates the issuer referenced by the given issuer ID.

### jwt

* `walletobjects_jwt_insert` - Inserts the resources in the JWT.

### loyaltyclass

* `walletobjects_loyaltyclass_addmessage` - Adds a message to the loyalty class referenced by the given class ID.
* `walletobjects_loyaltyclass_get` - Returns the loyalty class with the given class ID.
* `walletobjects_loyaltyclass_insert` - Inserts an loyalty class with the given ID and properties.
* `walletobjects_loyaltyclass_list` - Returns a list of all loyalty classes for a given issuer ID.
* `walletobjects_loyaltyclass_patch` - Updates the loyalty class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_loyaltyclass_update` - Updates the loyalty class referenced by the given class ID.

### loyaltyobject

* `walletobjects_loyaltyobject_addmessage` - Adds a message to the loyalty object referenced by the given object ID.
* `walletobjects_loyaltyobject_get` - Returns the loyalty object with the given object ID.
* `walletobjects_loyaltyobject_insert` - Inserts an loyalty object with the given ID and properties.
* `walletobjects_loyaltyobject_list` - Returns a list of all loyalty objects for a given issuer ID.
* `walletobjects_loyaltyobject_modifylinkedofferobjects` - Modifies linked offer objects for the loyalty object with the given ID.
* `walletobjects_loyaltyobject_patch` - Updates the loyalty object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_loyaltyobject_update` - Updates the loyalty object referenced by the given object ID.

### media

* `walletobjects_media_upload` - Uploads a private image and returns an Id to be used in its place.

### offerclass

* `walletobjects_offerclass_addmessage` - Adds a message to the offer class referenced by the given class ID.
* `walletobjects_offerclass_get` - Returns the offer class with the given class ID.
* `walletobjects_offerclass_insert` - Inserts an offer class with the given ID and properties.
* `walletobjects_offerclass_list` - Returns a list of all offer classes for a given issuer ID.
* `walletobjects_offerclass_patch` - Updates the offer class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_offerclass_update` - Updates the offer class referenced by the given class ID.

### offerobject

* `walletobjects_offerobject_addmessage` - Adds a message to the offer object referenced by the given object ID.
* `walletobjects_offerobject_get` - Returns the offer object with the given object ID.
* `walletobjects_offerobject_insert` - Inserts an offer object with the given ID and properties.
* `walletobjects_offerobject_list` - Returns a list of all offer objects for a given issuer ID.
* `walletobjects_offerobject_patch` - Updates the offer object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_offerobject_update` - Updates the offer object referenced by the given object ID.

### permissions

* `walletobjects_permissions_get` - Returns the permissions for the given issuer id.
* `walletobjects_permissions_update` - Updates the permissions for the given issuer.

### smarttap

* `walletobjects_smarttap_insert` - Inserts the smart tap.

### transitclass

* `walletobjects_transitclass_addmessage` - Adds a message to the transit class referenced by the given class ID.
* `walletobjects_transitclass_get` - Returns the transit class with the given class ID.
* `walletobjects_transitclass_insert` - Inserts a transit class with the given ID and properties.
* `walletobjects_transitclass_list` - Returns a list of all transit classes for a given issuer ID.
* `walletobjects_transitclass_patch` - Updates the transit class referenced by the given class ID. This method supports patch semantics.
* `walletobjects_transitclass_update` - Updates the transit class referenced by the given class ID.

### transitobject

* `walletobjects_transitobject_addmessage` - Adds a message to the transit object referenced by the given object ID.
* `walletobjects_transitobject_get` - Returns the transit object with the given object ID.
* `walletobjects_transitobject_insert` - Inserts an transit object with the given ID and properties.
* `walletobjects_transitobject_list` - Returns a list of all transit objects for a given issuer ID.
* `walletobjects_transitobject_patch` - Updates the transit object referenced by the given object ID. This method supports patch semantics.
* `walletobjects_transitobject_update` - Updates the transit object referenced by the given object ID.

### walletobjects

* `walletobjects_walletobjects_v1_private_content_upload_private_data` - Upload private data (text or URI) and returns an Id to be used in its place.
<!-- End SDK Available Operations -->

### Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

### Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release !

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
