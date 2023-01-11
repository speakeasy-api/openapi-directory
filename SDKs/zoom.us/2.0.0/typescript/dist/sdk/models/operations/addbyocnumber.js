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
exports.AddByocNumberResponse = exports.AddByocNumberRequest = exports.AddByocNumber201ApplicationJson = exports.AddByocNumber201ApplicationJsonPhoneNumbers = exports.AddByocNumberRequests = exports.AddByocNumberMultipartFormData = exports.AddByocNumberApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var AddByocNumberApplicationJson = /** @class */ (function (_super) {
    __extends(AddByocNumberApplicationJson, _super);
    function AddByocNumberApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=carrier" }),
        __metadata("design:type", String)
    ], AddByocNumberApplicationJson.prototype, "carrier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers" }),
        __metadata("design:type", Array)
    ], AddByocNumberApplicationJson.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], AddByocNumberApplicationJson.prototype, "siteId", void 0);
    return AddByocNumberApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddByocNumberApplicationJson = AddByocNumberApplicationJson;
var AddByocNumberMultipartFormData = /** @class */ (function (_super) {
    __extends(AddByocNumberMultipartFormData, _super);
    function AddByocNumberMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=carrier" }),
        __metadata("design:type", String)
    ], AddByocNumberMultipartFormData.prototype, "carrier", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_numbers;json=true" }),
        __metadata("design:type", Array)
    ], AddByocNumberMultipartFormData.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], AddByocNumberMultipartFormData.prototype, "siteId", void 0);
    return AddByocNumberMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddByocNumberMultipartFormData = AddByocNumberMultipartFormData;
var AddByocNumberRequests = /** @class */ (function (_super) {
    __extends(AddByocNumberRequests, _super);
    function AddByocNumberRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddByocNumberApplicationJson)
    ], AddByocNumberRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddByocNumberMultipartFormData)
    ], AddByocNumberRequests.prototype, "object1", void 0);
    return AddByocNumberRequests;
}(utils_1.SpeakeasyBase));
exports.AddByocNumberRequests = AddByocNumberRequests;
var AddByocNumber201ApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(AddByocNumber201ApplicationJsonPhoneNumbers, _super);
    function AddByocNumber201ApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddByocNumber201ApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AddByocNumber201ApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return AddByocNumber201ApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AddByocNumber201ApplicationJsonPhoneNumbers = AddByocNumber201ApplicationJsonPhoneNumbers;
var AddByocNumber201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddByocNumber201ApplicationJson, _super);
    function AddByocNumber201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: AddByocNumber201ApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], AddByocNumber201ApplicationJson.prototype, "phoneNumbers", void 0);
    return AddByocNumber201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddByocNumber201ApplicationJson = AddByocNumber201ApplicationJson;
var AddByocNumberRequest = /** @class */ (function (_super) {
    __extends(AddByocNumberRequest, _super);
    function AddByocNumberRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddByocNumberRequests)
    ], AddByocNumberRequest.prototype, "request", void 0);
    return AddByocNumberRequest;
}(utils_1.SpeakeasyBase));
exports.AddByocNumberRequest = AddByocNumberRequest;
var AddByocNumberResponse = /** @class */ (function (_super) {
    __extends(AddByocNumberResponse, _super);
    function AddByocNumberResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddByocNumberResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddByocNumberResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddByocNumberResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddByocNumber201ApplicationJson)
    ], AddByocNumberResponse.prototype, "addBYOCNumber201ApplicationJSONObject", void 0);
    return AddByocNumberResponse;
}(utils_1.SpeakeasyBase));
exports.AddByocNumberResponse = AddByocNumberResponse;
