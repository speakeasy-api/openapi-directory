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
exports.GetUserContactResponse = exports.GetUserContactRequest = exports.GetUserContact200ApplicationJson = exports.GetUserContact200ApplicationJsonPresenceStatusEnum = exports.GetUserContactSecurity = exports.GetUserContactQueryParams = exports.GetUserContactPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetUserContactPathParams = /** @class */ (function (_super) {
    __extends(GetUserContactPathParams, _super);
    function GetUserContactPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=contactId" }),
        __metadata("design:type", String)
    ], GetUserContactPathParams.prototype, "contactId", void 0);
    return GetUserContactPathParams;
}(utils_1.SpeakeasyBase));
exports.GetUserContactPathParams = GetUserContactPathParams;
var GetUserContactQueryParams = /** @class */ (function (_super) {
    __extends(GetUserContactQueryParams, _super);
    function GetUserContactQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=query_presence_status" }),
        __metadata("design:type", Boolean)
    ], GetUserContactQueryParams.prototype, "queryPresenceStatus", void 0);
    return GetUserContactQueryParams;
}(utils_1.SpeakeasyBase));
exports.GetUserContactQueryParams = GetUserContactQueryParams;
var GetUserContactSecurity = /** @class */ (function (_super) {
    __extends(GetUserContactSecurity, _super);
    function GetUserContactSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetUserContactSecurity.prototype, "oAuth", void 0);
    return GetUserContactSecurity;
}(utils_1.SpeakeasyBase));
exports.GetUserContactSecurity = GetUserContactSecurity;
var GetUserContact200ApplicationJsonPresenceStatusEnum;
(function (GetUserContact200ApplicationJsonPresenceStatusEnum) {
    GetUserContact200ApplicationJsonPresenceStatusEnum["DoNotDisturb"] = "Do_Not_Disturb";
    GetUserContact200ApplicationJsonPresenceStatusEnum["Away"] = "Away";
    GetUserContact200ApplicationJsonPresenceStatusEnum["Available"] = "Available";
    GetUserContact200ApplicationJsonPresenceStatusEnum["Offline"] = "Offline";
})(GetUserContact200ApplicationJsonPresenceStatusEnum = exports.GetUserContact200ApplicationJsonPresenceStatusEnum || (exports.GetUserContact200ApplicationJsonPresenceStatusEnum = {}));
var GetUserContact200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetUserContact200ApplicationJson, _super);
    function GetUserContact200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=direct_numbers" }),
        __metadata("design:type", Array)
    ], GetUserContact200ApplicationJson.prototype, "directNumbers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=extension_number" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "extensionNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=first_name" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "firstName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=last_name" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "lastName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=phone_number" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "phoneNumber", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=presence_status" }),
        __metadata("design:type", String)
    ], GetUserContact200ApplicationJson.prototype, "presenceStatus", void 0);
    return GetUserContact200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetUserContact200ApplicationJson = GetUserContact200ApplicationJson;
var GetUserContactRequest = /** @class */ (function (_super) {
    __extends(GetUserContactRequest, _super);
    function GetUserContactRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContactPathParams)
    ], GetUserContactRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContactQueryParams)
    ], GetUserContactRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContactSecurity)
    ], GetUserContactRequest.prototype, "security", void 0);
    return GetUserContactRequest;
}(utils_1.SpeakeasyBase));
exports.GetUserContactRequest = GetUserContactRequest;
var GetUserContactResponse = /** @class */ (function (_super) {
    __extends(GetUserContactResponse, _super);
    function GetUserContactResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetUserContactResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetUserContactResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetUserContactResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetUserContact200ApplicationJson)
    ], GetUserContactResponse.prototype, "getUserContact200ApplicationJSONObject", void 0);
    return GetUserContactResponse;
}(utils_1.SpeakeasyBase));
exports.GetUserContactResponse = GetUserContactResponse;
