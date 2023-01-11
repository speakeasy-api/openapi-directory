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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCommonAreaPhonesResponse = exports.ListCommonAreaPhonesRequest = exports.ListCommonAreaPhones200ApplicationJson = exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhones = exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite = exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers = exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum = exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans = exports.ListCommonAreaPhonesSecurity = exports.ListCommonAreaPhonesQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListCommonAreaPhonesQueryParams = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhonesQueryParams, _super);
    function ListCommonAreaPhonesQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhonesQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ListCommonAreaPhonesQueryParams.prototype, "pageSize", void 0);
    return ListCommonAreaPhonesQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhonesQueryParams = ListCommonAreaPhonesQueryParams;
var ListCommonAreaPhonesSecurity = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhonesSecurity, _super);
    function ListCommonAreaPhonesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListCommonAreaPhonesSecurity.prototype, "oAuth", void 0);
    return ListCommonAreaPhonesSecurity;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhonesSecurity = ListCommonAreaPhonesSecurity;
var ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans, _super);
    function ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=type" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans.prototype, "type", void 0);
    return ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans = ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans;
var ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum;
(function (ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum) {
    ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum["Internal"] = "internal";
    ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum["External"] = "external";
})(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum = exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum || (exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbersSourceEnum = {}));
var ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers, _super);
    function ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=source" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers.prototype, "source", void 0);
    return ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers = ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers;
var ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite, _super);
    function ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite.prototype, "name", void 0);
    return ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite = ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite;
var ListCommonAreaPhones200ApplicationJsonCommonAreaPhones = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhones200ApplicationJsonCommonAreaPhones, _super);
    function ListCommonAreaPhones200ApplicationJsonCommonAreaPhones() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=calling_plans", elemType: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesCallingPlans }),
        __metadata("design:type", Array)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "callingPlans", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=device_type" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "deviceType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=display_name" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "displayName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=mac_address" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "macAddress", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_numbers", elemType: ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesPhoneNumbers }),
        __metadata("design:type", Array)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "phoneNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=site" }),
        __metadata("design:type", ListCommonAreaPhones200ApplicationJsonCommonAreaPhonesSite)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "site", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJsonCommonAreaPhones.prototype, "status", void 0);
    return ListCommonAreaPhones200ApplicationJsonCommonAreaPhones;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhones200ApplicationJsonCommonAreaPhones = ListCommonAreaPhones200ApplicationJsonCommonAreaPhones;
var ListCommonAreaPhones200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhones200ApplicationJson, _super);
    function ListCommonAreaPhones200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=common_area_phones", elemType: ListCommonAreaPhones200ApplicationJsonCommonAreaPhones }),
        __metadata("design:type", Array)
    ], ListCommonAreaPhones200ApplicationJson.prototype, "commonAreaPhones", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ListCommonAreaPhones200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ListCommonAreaPhones200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListCommonAreaPhones200ApplicationJson.prototype, "totalRecords", void 0);
    return ListCommonAreaPhones200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhones200ApplicationJson = ListCommonAreaPhones200ApplicationJson;
var ListCommonAreaPhonesRequest = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhonesRequest, _super);
    function ListCommonAreaPhonesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCommonAreaPhonesQueryParams)
    ], ListCommonAreaPhonesRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCommonAreaPhonesSecurity)
    ], ListCommonAreaPhonesRequest.prototype, "security", void 0);
    return ListCommonAreaPhonesRequest;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhonesRequest = ListCommonAreaPhonesRequest;
var ListCommonAreaPhonesResponse = /** @class */ (function (_super) {
    __extends(ListCommonAreaPhonesResponse, _super);
    function ListCommonAreaPhonesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListCommonAreaPhonesResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListCommonAreaPhonesResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListCommonAreaPhonesResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListCommonAreaPhones200ApplicationJson)
    ], ListCommonAreaPhonesResponse.prototype, "listCommonAreaPhones200ApplicationJSONObject", void 0);
    return ListCommonAreaPhonesResponse;
}(utils_1.SpeakeasyBase));
exports.ListCommonAreaPhonesResponse = ListCommonAreaPhonesResponse;
