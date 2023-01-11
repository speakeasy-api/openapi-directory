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
exports.AccountCreateResponse = exports.AccountCreateRequest = exports.AccountCreate201ApplicationJson = exports.AccountCreateRequests = exports.AccountCreateMultipartFormData = exports.AccountCreateMultipartFormDataOptions = exports.AccountCreateMultipartFormDataOptionsPayModeEnum = exports.AccountCreateApplicationJson = exports.AccountCreateApplicationJsonOptions = exports.AccountCreateApplicationJsonOptionsPayModeEnum = void 0;
var utils_1 = require("../../../internal/utils");
var AccountCreateApplicationJsonOptionsPayModeEnum;
(function (AccountCreateApplicationJsonOptionsPayModeEnum) {
    AccountCreateApplicationJsonOptionsPayModeEnum["Master"] = "master";
    AccountCreateApplicationJsonOptionsPayModeEnum["Sub"] = "sub";
})(AccountCreateApplicationJsonOptionsPayModeEnum = exports.AccountCreateApplicationJsonOptionsPayModeEnum || (exports.AccountCreateApplicationJsonOptionsPayModeEnum = {}));
// AccountCreateApplicationJsonOptions
/**
 * Account options object.
**/
var AccountCreateApplicationJsonOptions = /** @class */ (function (_super) {
    __extends(AccountCreateApplicationJsonOptions, _super);
    function AccountCreateApplicationJsonOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_auto_renew" }),
        __metadata("design:type", Boolean)
    ], AccountCreateApplicationJsonOptions.prototype, "billingAutoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_connector_list" }),
        __metadata("design:type", Array)
    ], AccountCreateApplicationJsonOptions.prototype, "meetingConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pay_mode" }),
        __metadata("design:type", String)
    ], AccountCreateApplicationJsonOptions.prototype, "payMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_connector_list" }),
        __metadata("design:type", Array)
    ], AccountCreateApplicationJsonOptions.prototype, "roomConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_mc" }),
        __metadata("design:type", Boolean)
    ], AccountCreateApplicationJsonOptions.prototype, "shareMc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_rc" }),
        __metadata("design:type", Boolean)
    ], AccountCreateApplicationJsonOptions.prototype, "shareRc", void 0);
    return AccountCreateApplicationJsonOptions;
}(utils_1.SpeakeasyBase));
exports.AccountCreateApplicationJsonOptions = AccountCreateApplicationJsonOptions;
// AccountCreateApplicationJson
/**
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
var AccountCreateApplicationJson = /** @class */ (function (_super) {
    __extends(AccountCreateApplicationJson, _super);
    function AccountCreateApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=account_name" }),
        __metadata("design:type", String)
    ], AccountCreateApplicationJson.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], AccountCreateApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], AccountCreateApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], AccountCreateApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=options" }),
        __metadata("design:type", AccountCreateApplicationJsonOptions)
    ], AccountCreateApplicationJson.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=password" }),
        __metadata("design:type", String)
    ], AccountCreateApplicationJson.prototype, "password", void 0);
    return AccountCreateApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountCreateApplicationJson = AccountCreateApplicationJson;
var AccountCreateMultipartFormDataOptionsPayModeEnum;
(function (AccountCreateMultipartFormDataOptionsPayModeEnum) {
    AccountCreateMultipartFormDataOptionsPayModeEnum["Master"] = "master";
    AccountCreateMultipartFormDataOptionsPayModeEnum["Sub"] = "sub";
})(AccountCreateMultipartFormDataOptionsPayModeEnum = exports.AccountCreateMultipartFormDataOptionsPayModeEnum || (exports.AccountCreateMultipartFormDataOptionsPayModeEnum = {}));
// AccountCreateMultipartFormDataOptions
/**
 * Account options object.
**/
var AccountCreateMultipartFormDataOptions = /** @class */ (function (_super) {
    __extends(AccountCreateMultipartFormDataOptions, _super);
    function AccountCreateMultipartFormDataOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=billing_auto_renew" }),
        __metadata("design:type", Boolean)
    ], AccountCreateMultipartFormDataOptions.prototype, "billingAutoRenew", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=meeting_connector_list" }),
        __metadata("design:type", Array)
    ], AccountCreateMultipartFormDataOptions.prototype, "meetingConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=pay_mode" }),
        __metadata("design:type", String)
    ], AccountCreateMultipartFormDataOptions.prototype, "payMode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_connector_list" }),
        __metadata("design:type", Array)
    ], AccountCreateMultipartFormDataOptions.prototype, "roomConnectorList", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_mc" }),
        __metadata("design:type", Boolean)
    ], AccountCreateMultipartFormDataOptions.prototype, "shareMc", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=share_rc" }),
        __metadata("design:type", Boolean)
    ], AccountCreateMultipartFormDataOptions.prototype, "shareRc", void 0);
    return AccountCreateMultipartFormDataOptions;
}(utils_1.SpeakeasyBase));
exports.AccountCreateMultipartFormDataOptions = AccountCreateMultipartFormDataOptions;
// AccountCreateMultipartFormData
/**
 * The account object represents an account on Zoom. The account owner is the user who created the account or had an account created for them. You can read more about the Zoom account structure <a href='https://medium.com/zoom-developer-blog/a-brief-look-at-zoom-account-structures-1d19c745bf8a' target='_blank'>here</a>.
**/
var AccountCreateMultipartFormData = /** @class */ (function (_super) {
    __extends(AccountCreateMultipartFormData, _super);
    function AccountCreateMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=account_name" }),
        __metadata("design:type", String)
    ], AccountCreateMultipartFormData.prototype, "accountName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], AccountCreateMultipartFormData.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=first_name" }),
        __metadata("design:type", String)
    ], AccountCreateMultipartFormData.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=last_name" }),
        __metadata("design:type", String)
    ], AccountCreateMultipartFormData.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=options;json=true" }),
        __metadata("design:type", AccountCreateMultipartFormDataOptions)
    ], AccountCreateMultipartFormData.prototype, "options", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], AccountCreateMultipartFormData.prototype, "password", void 0);
    return AccountCreateMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.AccountCreateMultipartFormData = AccountCreateMultipartFormData;
var AccountCreateRequests = /** @class */ (function (_super) {
    __extends(AccountCreateRequests, _super);
    function AccountCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", AccountCreateApplicationJson)
    ], AccountCreateRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", AccountCreateMultipartFormData)
    ], AccountCreateRequests.prototype, "object1", void 0);
    return AccountCreateRequests;
}(utils_1.SpeakeasyBase));
exports.AccountCreateRequests = AccountCreateRequests;
var AccountCreate201ApplicationJson = /** @class */ (function (_super) {
    __extends(AccountCreate201ApplicationJson, _super);
    function AccountCreate201ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=created_at" }),
        __metadata("design:type", String)
    ], AccountCreate201ApplicationJson.prototype, "createdAt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], AccountCreate201ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_email" }),
        __metadata("design:type", String)
    ], AccountCreate201ApplicationJson.prototype, "ownerEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=owner_id" }),
        __metadata("design:type", String)
    ], AccountCreate201ApplicationJson.prototype, "ownerId", void 0);
    return AccountCreate201ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.AccountCreate201ApplicationJson = AccountCreate201ApplicationJson;
var AccountCreateRequest = /** @class */ (function (_super) {
    __extends(AccountCreateRequest, _super);
    function AccountCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCreateRequests)
    ], AccountCreateRequest.prototype, "request", void 0);
    return AccountCreateRequest;
}(utils_1.SpeakeasyBase));
exports.AccountCreateRequest = AccountCreateRequest;
var AccountCreateResponse = /** @class */ (function (_super) {
    __extends(AccountCreateResponse, _super);
    function AccountCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], AccountCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], AccountCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], AccountCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], AccountCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", AccountCreate201ApplicationJson)
    ], AccountCreateResponse.prototype, "accountCreate201ApplicationJSONObject", void 0);
    return AccountCreateResponse;
}(utils_1.SpeakeasyBase));
exports.AccountCreateResponse = AccountCreateResponse;
