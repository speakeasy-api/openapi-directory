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
exports.GetZrLocationProfileResponse = exports.GetZrLocationProfileRequest = exports.GetZrLocationProfile200ApplicationJson = exports.GetZrLocationProfile200ApplicationJsonBasic = exports.GetZrLocationProfileSecurity = exports.GetZrLocationProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetZrLocationProfilePathParams = /** @class */ (function (_super) {
    __extends(GetZrLocationProfilePathParams, _super);
    function GetZrLocationProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locationId" }),
        __metadata("design:type", String)
    ], GetZrLocationProfilePathParams.prototype, "locationId", void 0);
    return GetZrLocationProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.GetZrLocationProfilePathParams = GetZrLocationProfilePathParams;
var GetZrLocationProfileSecurity = /** @class */ (function (_super) {
    __extends(GetZrLocationProfileSecurity, _super);
    function GetZrLocationProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetZrLocationProfileSecurity.prototype, "oAuth", void 0);
    return GetZrLocationProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.GetZrLocationProfileSecurity = GetZrLocationProfileSecurity;
var GetZrLocationProfile200ApplicationJsonBasic = /** @class */ (function (_super) {
    __extends(GetZrLocationProfile200ApplicationJsonBasic, _super);
    function GetZrLocationProfile200ApplicationJsonBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description " }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "supportPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], GetZrLocationProfile200ApplicationJsonBasic.prototype, "timezone", void 0);
    return GetZrLocationProfile200ApplicationJsonBasic;
}(utils_1.SpeakeasyBase));
exports.GetZrLocationProfile200ApplicationJsonBasic = GetZrLocationProfile200ApplicationJsonBasic;
var GetZrLocationProfile200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetZrLocationProfile200ApplicationJson, _super);
    function GetZrLocationProfile200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic" }),
        __metadata("design:type", GetZrLocationProfile200ApplicationJsonBasic)
    ], GetZrLocationProfile200ApplicationJson.prototype, "basic", void 0);
    return GetZrLocationProfile200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetZrLocationProfile200ApplicationJson = GetZrLocationProfile200ApplicationJson;
var GetZrLocationProfileRequest = /** @class */ (function (_super) {
    __extends(GetZrLocationProfileRequest, _super);
    function GetZrLocationProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetZrLocationProfilePathParams)
    ], GetZrLocationProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetZrLocationProfileSecurity)
    ], GetZrLocationProfileRequest.prototype, "security", void 0);
    return GetZrLocationProfileRequest;
}(utils_1.SpeakeasyBase));
exports.GetZrLocationProfileRequest = GetZrLocationProfileRequest;
var GetZrLocationProfileResponse = /** @class */ (function (_super) {
    __extends(GetZrLocationProfileResponse, _super);
    function GetZrLocationProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetZrLocationProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetZrLocationProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetZrLocationProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetZrLocationProfile200ApplicationJson)
    ], GetZrLocationProfileResponse.prototype, "getZRLocationProfile200ApplicationJSONObject", void 0);
    return GetZrLocationProfileResponse;
}(utils_1.SpeakeasyBase));
exports.GetZrLocationProfileResponse = GetZrLocationProfileResponse;
