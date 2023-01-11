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
exports.AssignPhoneNumbersSlgResponse = exports.AssignPhoneNumbersSlgRequest = exports.AssignPhoneNumbersSlgRequests = exports.AssignPhoneNumbersSlgMultipartFormData1 = exports.AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers = exports.AssignPhoneNumbersSlgApplicationJson = exports.AssignPhoneNumbersSlgApplicationJsonPhoneNumbers = exports.AssignPhoneNumbersSlgPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AssignPhoneNumbersSlgPathParams = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgPathParams, _super);
    function AssignPhoneNumbersSlgPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=sharedLineGroupId" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersSlgPathParams.prototype, "sharedLineGroupId", void 0);
    return AssignPhoneNumbersSlgPathParams;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgPathParams = AssignPhoneNumbersSlgPathParams;
var AssignPhoneNumbersSlgApplicationJsonPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgApplicationJsonPhoneNumbers, _super);
    function AssignPhoneNumbersSlgApplicationJsonPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersSlgApplicationJsonPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersSlgApplicationJsonPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumbersSlgApplicationJsonPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgApplicationJsonPhoneNumbers = AssignPhoneNumbersSlgApplicationJsonPhoneNumbers;
var AssignPhoneNumbersSlgApplicationJson = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgApplicationJson, _super);
    function AssignPhoneNumbersSlgApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: AssignPhoneNumbersSlgApplicationJsonPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumbersSlgApplicationJson.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumbersSlgApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgApplicationJson = AssignPhoneNumbersSlgApplicationJson;
var AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers, _super);
    function AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers.prototype, "number", void 0);
    return AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers = AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers;
var AssignPhoneNumbersSlgMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgMultipartFormData1, _super);
    function AssignPhoneNumbersSlgMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=phone_numbers;json=true", elemType: AssignPhoneNumbersSlgMultipartFormDataPhoneNumbers }),
        __metadata("design:type", Array)
    ], AssignPhoneNumbersSlgMultipartFormData1.prototype, "phoneNumbers", void 0);
    return AssignPhoneNumbersSlgMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgMultipartFormData1 = AssignPhoneNumbersSlgMultipartFormData1;
var AssignPhoneNumbersSlgRequests = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgRequests, _super);
    function AssignPhoneNumbersSlgRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AssignPhoneNumbersSlgApplicationJson)
    ], AssignPhoneNumbersSlgRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AssignPhoneNumbersSlgMultipartFormData1)
    ], AssignPhoneNumbersSlgRequests.prototype, "object1", void 0);
    return AssignPhoneNumbersSlgRequests;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgRequests = AssignPhoneNumbersSlgRequests;
var AssignPhoneNumbersSlgRequest = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgRequest, _super);
    function AssignPhoneNumbersSlgRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumbersSlgPathParams)
    ], AssignPhoneNumbersSlgRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AssignPhoneNumbersSlgRequests)
    ], AssignPhoneNumbersSlgRequest.prototype, "request", void 0);
    return AssignPhoneNumbersSlgRequest;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgRequest = AssignPhoneNumbersSlgRequest;
var AssignPhoneNumbersSlgResponse = /** @class */ (function (_super) {
    __extends(AssignPhoneNumbersSlgResponse, _super);
    function AssignPhoneNumbersSlgResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AssignPhoneNumbersSlgResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AssignPhoneNumbersSlgResponse.prototype, "statusCode", void 0);
    return AssignPhoneNumbersSlgResponse;
}(utils_1.SpeakeasyBase));
exports.AssignPhoneNumbersSlgResponse = AssignPhoneNumbersSlgResponse;
