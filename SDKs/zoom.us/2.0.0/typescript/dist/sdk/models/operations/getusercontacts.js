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
exports.GetUserContactsResponse = exports.GetUserContactsRequest = exports.GetUserContacts200ApplicationJson = exports.GetUserContacts200ApplicationJsonContacts = exports.GetUserContactsSecurity = exports.GetUserContactsQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserContactsQueryParams = /** @class */ (function (_super) {
    __extends(GetUserContactsQueryParams, _super);
    function GetUserContactsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], GetUserContactsQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], GetUserContactsQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], GetUserContactsQueryParams.prototype, "type", void 0);
    return GetUserContactsQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUserContactsQueryParams = GetUserContactsQueryParams;
var GetUserContactsSecurity = /** @class */ (function (_super) {
    __extends(GetUserContactsSecurity, _super);
    function GetUserContactsSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetUserContactsSecurity.prototype, "oAuth", void 0);
    return GetUserContactsSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUserContactsSecurity = GetUserContactsSecurity;
var GetUserContacts200ApplicationJsonContacts = /** @class */ (function (_super) {
    __extends(GetUserContacts200ApplicationJsonContacts, _super);
    function GetUserContacts200ApplicationJsonContacts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetUserContacts200ApplicationJsonContacts.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], GetUserContacts200ApplicationJsonContacts.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetUserContacts200ApplicationJsonContacts.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], GetUserContacts200ApplicationJsonContacts.prototype, "lastName", void 0);
    return GetUserContacts200ApplicationJsonContacts;
}(utils_1.SpeakeasyBase));
exports.GetUserContacts200ApplicationJsonContacts = GetUserContacts200ApplicationJsonContacts;
var GetUserContacts200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContacts200ApplicationJson, _super);
    function GetUserContacts200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=contacts", elemType: GetUserContacts200ApplicationJsonContacts }),
        __metadata("design:type", Array)
    ], GetUserContacts200ApplicationJson.prototype, "contacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], GetUserContacts200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], GetUserContacts200ApplicationJson.prototype, "pageSize", void 0);
    return GetUserContacts200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUserContacts200ApplicationJson = GetUserContacts200ApplicationJson;
var GetUserContactsRequest = /** @class */ (function (_super) {
    __extends(GetUserContactsRequest, _super);
    function GetUserContactsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContactsQueryParams)
    ], GetUserContactsRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContactsSecurity)
    ], GetUserContactsRequest.prototype, "security", void 0);
    return GetUserContactsRequest;
}(utils_1.SpeakeasyBase));
exports.GetUserContactsRequest = GetUserContactsRequest;
var GetUserContactsResponse = /** @class */ (function (_super) {
    __extends(GetUserContactsResponse, _super);
    function GetUserContactsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUserContactsResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserContactsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserContactsResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContacts200ApplicationJson)
    ], GetUserContactsResponse.prototype, "getUserContacts200ApplicationJSONObject", void 0);
    return GetUserContactsResponse;
}(utils_1.SpeakeasyBase));
exports.GetUserContactsResponse = GetUserContactsResponse;
