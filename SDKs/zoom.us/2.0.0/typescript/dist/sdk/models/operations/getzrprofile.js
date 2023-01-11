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
exports.GetZrProfileResponse = exports.GetZrProfileRequest = exports.GetZrProfile200ApplicationJson = exports.GetZrProfile200ApplicationJsonBasic = exports.GetZrProfileSecurity = exports.GetZrProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var GetZrProfilePathParams = /** @class */ (function (_super) {
    __extends(GetZrProfilePathParams, _super);
    function GetZrProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roomId" }),
        __metadata("design:type", String)
    ], GetZrProfilePathParams.prototype, "roomId", void 0);
    return GetZrProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.GetZrProfilePathParams = GetZrProfilePathParams;
var GetZrProfileSecurity = /** @class */ (function (_super) {
    __extends(GetZrProfileSecurity, _super);
    function GetZrProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], GetZrProfileSecurity.prototype, "oAuth", void 0);
    return GetZrProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.GetZrProfileSecurity = GetZrProfileSecurity;
var GetZrProfile200ApplicationJsonBasic = /** @class */ (function (_super) {
    __extends(GetZrProfile200ApplicationJsonBasic, _super);
    function GetZrProfile200ApplicationJsonBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=activation_code" }),
        __metadata("design:type", String)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "activationCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_room_in_contacts" }),
        __metadata("design:type", Boolean)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "hideRoomInContacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], GetZrProfile200ApplicationJsonBasic.prototype, "supportPhone", void 0);
    return GetZrProfile200ApplicationJsonBasic;
}(utils_1.SpeakeasyBase));
exports.GetZrProfile200ApplicationJsonBasic = GetZrProfile200ApplicationJsonBasic;
var GetZrProfile200ApplicationJson = /** @class */ (function (_super) {
    __extends(GetZrProfile200ApplicationJson, _super);
    function GetZrProfile200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic" }),
        __metadata("design:type", GetZrProfile200ApplicationJsonBasic)
    ], GetZrProfile200ApplicationJson.prototype, "basic", void 0);
    return GetZrProfile200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.GetZrProfile200ApplicationJson = GetZrProfile200ApplicationJson;
var GetZrProfileRequest = /** @class */ (function (_super) {
    __extends(GetZrProfileRequest, _super);
    function GetZrProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetZrProfilePathParams)
    ], GetZrProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetZrProfileSecurity)
    ], GetZrProfileRequest.prototype, "security", void 0);
    return GetZrProfileRequest;
}(utils_1.SpeakeasyBase));
exports.GetZrProfileRequest = GetZrProfileRequest;
var GetZrProfileResponse = /** @class */ (function (_super) {
    __extends(GetZrProfileResponse, _super);
    function GetZrProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], GetZrProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], GetZrProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], GetZrProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", GetZrProfile200ApplicationJson)
    ], GetZrProfileResponse.prototype, "getZRProfile200ApplicationJSONObject", void 0);
    return GetZrProfileResponse;
}(utils_1.SpeakeasyBase));
exports.GetZrProfileResponse = GetZrProfileResponse;
