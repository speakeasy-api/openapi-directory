import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPaymentItemPartType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=createdById" })
  createdById?: string;

  @SpeakeasyMetadata({ data: "json, name=createdDate" })
  createdDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=debitMemoItemId" })
  debitMemoItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=invoiceItemId" })
  invoiceItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxItemId" })
  taxItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedById" })
  updatedById?: string;

  @SpeakeasyMetadata({ data: "json, name=updatedDate" })
  updatedDate?: Date;
}
