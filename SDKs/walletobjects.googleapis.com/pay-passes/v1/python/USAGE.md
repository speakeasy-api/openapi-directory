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