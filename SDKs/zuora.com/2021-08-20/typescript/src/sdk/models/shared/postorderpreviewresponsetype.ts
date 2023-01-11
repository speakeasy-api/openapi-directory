import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PreviewResult } from "./previewresult";



export class PostOrderPreviewResponseTypeReasons extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostOrderPreviewResponseType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=previewResult" })
  previewResult?: PreviewResult;

  @SpeakeasyMetadata({ data: "json, name=processId" })
  processId?: string;

  @SpeakeasyMetadata({ data: "json, name=reasons", elemType: PostOrderPreviewResponseTypeReasons })
  reasons?: PostOrderPreviewResponseTypeReasons[];

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
