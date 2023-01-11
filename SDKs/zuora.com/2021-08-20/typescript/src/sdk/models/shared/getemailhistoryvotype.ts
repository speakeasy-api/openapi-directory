import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEmailHistoryVoType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bcc" })
  bcc?: string;

  @SpeakeasyMetadata({ data: "json, name=cc" })
  cc?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=eventCategory" })
  eventCategory?: string;

  @SpeakeasyMetadata({ data: "json, name=fromEmail" })
  fromEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=notification" })
  notification?: string;

  @SpeakeasyMetadata({ data: "json, name=replyTo" })
  replyTo?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=sendTime" })
  sendTime?: string;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=toEmail" })
  toEmail?: string;
}
