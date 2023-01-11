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
exports.AddCalloutCountriesResponse = exports.AddCalloutCountriesRequest = exports.AddCalloutCountries201ApplicationJson = exports.AddCalloutCountries201ApplicationJsonCalloutCountries = exports.AddCalloutCountriesRequests = exports.AddCalloutCountriesMultipartFormData1 = exports.AddCalloutCountriesMultipartFormDataCalloutCountries = exports.AddCalloutCountriesApplicationJson = exports.AddCalloutCountriesApplicationJsonCalloutCountries = exports.AddCalloutCountriesPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var AddCalloutCountriesPathParams = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesPathParams, _super);
    function AddCalloutCountriesPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AddCalloutCountriesPathParams.prototype, "accountId", void 0);
    return AddCalloutCountriesPathParams;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesPathParams = AddCalloutCountriesPathParams;
var AddCalloutCountriesApplicationJsonCalloutCountries = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesApplicationJsonCalloutCountries, _super);
    function AddCalloutCountriesApplicationJsonCalloutCountries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddCalloutCountriesApplicationJsonCalloutCountries.prototype, "id", void 0);
    return AddCalloutCountriesApplicationJsonCalloutCountries;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesApplicationJsonCalloutCountries = AddCalloutCountriesApplicationJsonCalloutCountries;
var AddCalloutCountriesApplicationJson = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesApplicationJson, _super);
    function AddCalloutCountriesApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries", elemType: AddCalloutCountriesApplicationJsonCalloutCountries }),
        __metadata("design:type", Array)
    ], AddCalloutCountriesApplicationJson.prototype, "calloutCountries", void 0);
    return AddCalloutCountriesApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesApplicationJson = AddCalloutCountriesApplicationJson;
var AddCalloutCountriesMultipartFormDataCalloutCountries = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesMultipartFormDataCalloutCountries, _super);
    function AddCalloutCountriesMultipartFormDataCalloutCountries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddCalloutCountriesMultipartFormDataCalloutCountries.prototype, "id", void 0);
    return AddCalloutCountriesMultipartFormDataCalloutCountries;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesMultipartFormDataCalloutCountries = AddCalloutCountriesMultipartFormDataCalloutCountries;
var AddCalloutCountriesMultipartFormData1 = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesMultipartFormData1, _super);
    function AddCalloutCountriesMultipartFormData1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=callout_countries;json=true", elemType: AddCalloutCountriesMultipartFormDataCalloutCountries }),
        __metadata("design:type", Array)
    ], AddCalloutCountriesMultipartFormData1.prototype, "calloutCountries", void 0);
    return AddCalloutCountriesMultipartFormData1;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesMultipartFormData1 = AddCalloutCountriesMultipartFormData1;
var AddCalloutCountriesRequests = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesRequests, _super);
    function AddCalloutCountriesRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddCalloutCountriesApplicationJson)
    ], AddCalloutCountriesRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddCalloutCountriesMultipartFormData1)
    ], AddCalloutCountriesRequests.prototype, "object1", void 0);
    return AddCalloutCountriesRequests;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesRequests = AddCalloutCountriesRequests;
var AddCalloutCountries201ApplicationJsonCalloutCountries = /** @class */ (function (_super) {
    __extends(AddCalloutCountries201ApplicationJsonCalloutCountries, _super);
    function AddCalloutCountries201ApplicationJsonCalloutCountries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=code" }),
        __metadata("design:type", String)
    ], AddCalloutCountries201ApplicationJsonCalloutCountries.prototype, "code", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddCalloutCountries201ApplicationJsonCalloutCountries.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddCalloutCountries201ApplicationJsonCalloutCountries.prototype, "name", void 0);
    return AddCalloutCountries201ApplicationJsonCalloutCountries;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountries201ApplicationJsonCalloutCountries = AddCalloutCountries201ApplicationJsonCalloutCountries;
var AddCalloutCountries201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddCalloutCountries201ApplicationJson, _super);
    function AddCalloutCountries201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=callout_countries", elemType: AddCalloutCountries201ApplicationJsonCalloutCountries }),
        __metadata("design:type", Array)
    ], AddCalloutCountries201ApplicationJson.prototype, "calloutCountries", void 0);
    return AddCalloutCountries201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountries201ApplicationJson = AddCalloutCountries201ApplicationJson;
var AddCalloutCountriesRequest = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesRequest, _super);
    function AddCalloutCountriesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddCalloutCountriesPathParams)
    ], AddCalloutCountriesRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddCalloutCountriesRequests)
    ], AddCalloutCountriesRequest.prototype, "request", void 0);
    return AddCalloutCountriesRequest;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesRequest = AddCalloutCountriesRequest;
var AddCalloutCountriesResponse = /** @class */ (function (_super) {
    __extends(AddCalloutCountriesResponse, _super);
    function AddCalloutCountriesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddCalloutCountriesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddCalloutCountriesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddCalloutCountriesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddCalloutCountries201ApplicationJson)
    ], AddCalloutCountriesResponse.prototype, "addCalloutCountries201ApplicationJSONObject", void 0);
    return AddCalloutCountriesResponse;
}(utils_1.SpeakeasyBase));
exports.AddCalloutCountriesResponse = AddCalloutCountriesResponse;
