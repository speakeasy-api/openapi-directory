"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddInternalNumbersResponse = exports.AddInternalNumbersRequest = exports.AddInternalNumbers201ApplicationJson = exports.AddInternalNumbers201ApplicationJsonInternalNumbers = exports.AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum = exports.AddInternalNumbersRequests = exports.AddInternalNumbersMultipartFormData1 = exports.AddInternalNumbersMultipartFormDataInternalNumbers = exports.AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = exports.AddInternalNumbersApplicationJson = exports.AddInternalNumbersApplicationJsonInternalNumbers = exports.AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum = exports.AddInternalNumbersPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AddInternalNumbersPathParams = /** @class */ (function (_super) {
    __extends(AddInternalNumbersPathParams, _super);
    function AddInternalNumbersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AddInternalNumbersPathParams.prototype, "accountId", void 0);
    return AddInternalNumbersPathParams;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersPathParams = AddInternalNumbersPathParams;
var AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum;
(function (AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum) {
    AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum["EnGb"] = "en-GB";
    AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum["EnUs"] = "en-US";
    AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum["DeDe"] = "de-DE";
})(AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum = exports.AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum || (exports.AddInternalNumbersApplicationJsonInternalNumbersLanguagesEnum = {}));
var AddInternalNumbersApplicationJsonInternalNumbers = /** @class */ (function (_super) {
    __extends(AddInternalNumbersApplicationJsonInternalNumbers, _super);
    function AddInternalNumbersApplicationJsonInternalNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_for_external_meetings" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "allowForExternalMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_join" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "allowJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_number" }),
        __metadata("design:type", String)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "displayNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", String)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbersApplicationJsonInternalNumbers.prototype, "visible", void 0);
    return AddInternalNumbersApplicationJsonInternalNumbers;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersApplicationJsonInternalNumbers = AddInternalNumbersApplicationJsonInternalNumbers;
var AddInternalNumbersApplicationJson = /** @class */ (function (_super) {
    __extends(AddInternalNumbersApplicationJson, _super);
    function AddInternalNumbersApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internal_numbers", elemType: AddInternalNumbersApplicationJsonInternalNumbers }),
        __metadata("design:type", Array)
    ], AddInternalNumbersApplicationJson.prototype, "internalNumbers", void 0);
    return AddInternalNumbersApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersApplicationJson = AddInternalNumbersApplicationJson;
var AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum;
(function (AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum) {
    AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum["EnGb"] = "en-GB";
    AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum["EnUs"] = "en-US";
    AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum["DeDe"] = "de-DE";
})(AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = exports.AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum || (exports.AddInternalNumbersMultipartFormDataInternalNumbersLanguagesEnum = {}));
var AddInternalNumbersMultipartFormDataInternalNumbers = /** @class */ (function (_super) {
    __extends(AddInternalNumbersMultipartFormDataInternalNumbers, _super);
    function AddInternalNumbersMultipartFormDataInternalNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_for_external_meetings" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "allowForExternalMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_join" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "allowJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_number" }),
        __metadata("design:type", String)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "displayNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", String)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbersMultipartFormDataInternalNumbers.prototype, "visible", void 0);
    return AddInternalNumbersMultipartFormDataInternalNumbers;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersMultipartFormDataInternalNumbers = AddInternalNumbersMultipartFormDataInternalNumbers;
var AddInternalNumbersMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AddInternalNumbersMultipartFormData1, _super);
    function AddInternalNumbersMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=internal_numbers;json=true", elemType: AddInternalNumbersMultipartFormDataInternalNumbers }),
        __metadata("design:type", Array)
    ], AddInternalNumbersMultipartFormData1.prototype, "internalNumbers", void 0);
    return AddInternalNumbersMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersMultipartFormData1 = AddInternalNumbersMultipartFormData1;
var AddInternalNumbersRequests = /** @class */ (function (_super) {
    __extends(AddInternalNumbersRequests, _super);
    function AddInternalNumbersRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddInternalNumbersApplicationJson)
    ], AddInternalNumbersRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddInternalNumbersMultipartFormData1)
    ], AddInternalNumbersRequests.prototype, "object1", void 0);
    return AddInternalNumbersRequests;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersRequests = AddInternalNumbersRequests;
var AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum;
(function (AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum) {
    AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum["EnGb"] = "en-GB";
    AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum["EnUs"] = "en-US";
    AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum["DeDe"] = "de-DE";
})(AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum = exports.AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum || (exports.AddInternalNumbers201ApplicationJsonInternalNumbersLanguagesEnum = {}));
var AddInternalNumbers201ApplicationJsonInternalNumbers = /** @class */ (function (_super) {
    __extends(AddInternalNumbers201ApplicationJsonInternalNumbers, _super);
    function AddInternalNumbers201ApplicationJsonInternalNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_for_external_meetings" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "allowForExternalMeetings", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=allow_join" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "allowJoin", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=country" }),
        __metadata("design:type", String)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "country", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_number" }),
        __metadata("design:type", String)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "displayNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=labels" }),
        __metadata("design:type", String)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "labels", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=languages" }),
        __metadata("design:type", String)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "languages", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", Number)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "type", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], AddInternalNumbers201ApplicationJsonInternalNumbers.prototype, "visible", void 0);
    return AddInternalNumbers201ApplicationJsonInternalNumbers;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbers201ApplicationJsonInternalNumbers = AddInternalNumbers201ApplicationJsonInternalNumbers;
var AddInternalNumbers201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddInternalNumbers201ApplicationJson, _super);
    function AddInternalNumbers201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=internal_numbers", elemType: AddInternalNumbers201ApplicationJsonInternalNumbers }),
        __metadata("design:type", Array)
    ], AddInternalNumbers201ApplicationJson.prototype, "internalNumbers", void 0);
    return AddInternalNumbers201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbers201ApplicationJson = AddInternalNumbers201ApplicationJson;
var AddInternalNumbersRequest = /** @class */ (function (_super) {
    __extends(AddInternalNumbersRequest, _super);
    function AddInternalNumbersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddInternalNumbersPathParams)
    ], AddInternalNumbersRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddInternalNumbersRequests)
    ], AddInternalNumbersRequest.prototype, "request", void 0);
    return AddInternalNumbersRequest;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersRequest = AddInternalNumbersRequest;
var AddInternalNumbersResponse = /** @class */ (function (_super) {
    __extends(AddInternalNumbersResponse, _super);
    function AddInternalNumbersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddInternalNumbersResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddInternalNumbersResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddInternalNumbersResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddInternalNumbers201ApplicationJson)
    ], AddInternalNumbersResponse.prototype, "addInternalNumbers201ApplicationJSONObject", void 0);
    return AddInternalNumbersResponse;
}(utils_1.SpeakeasyBase));
exports.AddInternalNumbersResponse = AddInternalNumbersResponse;
