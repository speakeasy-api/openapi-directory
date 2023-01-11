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
exports.AddAutoReceptionistResponse = exports.AddAutoReceptionistRequest = exports.AddAutoReceptionist201ApplicationJson = exports.AddAutoReceptionistRequests = exports.AddAutoReceptionistMultipartFormData = exports.AddAutoReceptionistApplicationJson = void 0;
var utils_1 = require("../../../internal/utils");
var AddAutoReceptionistApplicationJson = /** @class */ (function (_super) {
    __extends(AddAutoReceptionistApplicationJson, _super);
    function AddAutoReceptionistApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddAutoReceptionistApplicationJson.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site_id" }),
        __metadata("design:type", String)
    ], AddAutoReceptionistApplicationJson.prototype, "siteId", void 0);
    return AddAutoReceptionistApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddAutoReceptionistApplicationJson = AddAutoReceptionistApplicationJson;
var AddAutoReceptionistMultipartFormData = /** @class */ (function (_super) {
    __extends(AddAutoReceptionistMultipartFormData, _super);
    function AddAutoReceptionistMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], AddAutoReceptionistMultipartFormData.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=site_id" }),
        __metadata("design:type", String)
    ], AddAutoReceptionistMultipartFormData.prototype, "siteId", void 0);
    return AddAutoReceptionistMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AddAutoReceptionistMultipartFormData = AddAutoReceptionistMultipartFormData;
var AddAutoReceptionistRequests = /** @class */ (function (_super) {
    __extends(AddAutoReceptionistRequests, _super);
    function AddAutoReceptionistRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AddAutoReceptionistApplicationJson)
    ], AddAutoReceptionistRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AddAutoReceptionistMultipartFormData)
    ], AddAutoReceptionistRequests.prototype, "object1", void 0);
    return AddAutoReceptionistRequests;
}(utils_1.SpeakeasyBase));
exports.AddAutoReceptionistRequests = AddAutoReceptionistRequests;
var AddAutoReceptionist201ApplicationJson = /** @class */ (function (_super) {
    __extends(AddAutoReceptionist201ApplicationJson, _super);
    function AddAutoReceptionist201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", Number)
    ], AddAutoReceptionist201ApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AddAutoReceptionist201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], AddAutoReceptionist201ApplicationJson.prototype, "name", void 0);
    return AddAutoReceptionist201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AddAutoReceptionist201ApplicationJson = AddAutoReceptionist201ApplicationJson;
var AddAutoReceptionistRequest = /** @class */ (function (_super) {
    __extends(AddAutoReceptionistRequest, _super);
    function AddAutoReceptionistRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAutoReceptionistRequests)
    ], AddAutoReceptionistRequest.prototype, "request", void 0);
    return AddAutoReceptionistRequest;
}(utils_1.SpeakeasyBase));
exports.AddAutoReceptionistRequest = AddAutoReceptionistRequest;
var AddAutoReceptionistResponse = /** @class */ (function (_super) {
    __extends(AddAutoReceptionistResponse, _super);
    function AddAutoReceptionistResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AddAutoReceptionistResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AddAutoReceptionistResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AddAutoReceptionistResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AddAutoReceptionist201ApplicationJson)
    ], AddAutoReceptionistResponse.prototype, "addAutoReceptionist201ApplicationJSONObject", void 0);
    return AddAutoReceptionistResponse;
}(utils_1.SpeakeasyBase));
exports.AddAutoReceptionistResponse = AddAutoReceptionistResponse;
