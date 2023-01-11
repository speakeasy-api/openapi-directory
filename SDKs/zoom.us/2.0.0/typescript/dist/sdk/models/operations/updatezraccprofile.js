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
exports.UpdateZrAccProfileResponse = exports.UpdateZrAccProfileRequest = exports.UpdateZrAccProfileSecurity = exports.UpdateZrAccProfileRequests = exports.UpdateZrAccProfileMultipartFormData = exports.UpdateZrAccProfileMultipartFormDataBasic = exports.UpdateZrAccProfileApplicationJson = exports.UpdateZrAccProfileApplicationJsonBasic = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateZrAccProfileApplicationJsonBasic = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileApplicationJsonBasic, _super);
    function UpdateZrAccProfileApplicationJsonBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], UpdateZrAccProfileApplicationJsonBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], UpdateZrAccProfileApplicationJsonBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], UpdateZrAccProfileApplicationJsonBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], UpdateZrAccProfileApplicationJsonBasic.prototype, "supportPhone", void 0);
    return UpdateZrAccProfileApplicationJsonBasic;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileApplicationJsonBasic = UpdateZrAccProfileApplicationJsonBasic;
var UpdateZrAccProfileApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileApplicationJson, _super);
    function UpdateZrAccProfileApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic" }),
        __metadata("design:type", UpdateZrAccProfileApplicationJsonBasic)
    ], UpdateZrAccProfileApplicationJson.prototype, "basic", void 0);
    return UpdateZrAccProfileApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileApplicationJson = UpdateZrAccProfileApplicationJson;
var UpdateZrAccProfileMultipartFormDataBasic = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileMultipartFormDataBasic, _super);
    function UpdateZrAccProfileMultipartFormDataBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], UpdateZrAccProfileMultipartFormDataBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], UpdateZrAccProfileMultipartFormDataBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], UpdateZrAccProfileMultipartFormDataBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], UpdateZrAccProfileMultipartFormDataBasic.prototype, "supportPhone", void 0);
    return UpdateZrAccProfileMultipartFormDataBasic;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileMultipartFormDataBasic = UpdateZrAccProfileMultipartFormDataBasic;
var UpdateZrAccProfileMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileMultipartFormData, _super);
    function UpdateZrAccProfileMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=basic;json=true" }),
        __metadata("design:type", UpdateZrAccProfileMultipartFormDataBasic)
    ], UpdateZrAccProfileMultipartFormData.prototype, "basic", void 0);
    return UpdateZrAccProfileMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileMultipartFormData = UpdateZrAccProfileMultipartFormData;
var UpdateZrAccProfileRequests = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileRequests, _super);
    function UpdateZrAccProfileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateZrAccProfileApplicationJson)
    ], UpdateZrAccProfileRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateZrAccProfileMultipartFormData)
    ], UpdateZrAccProfileRequests.prototype, "object1", void 0);
    return UpdateZrAccProfileRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileRequests = UpdateZrAccProfileRequests;
var UpdateZrAccProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileSecurity, _super);
    function UpdateZrAccProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateZrAccProfileSecurity.prototype, "oAuth", void 0);
    return UpdateZrAccProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileSecurity = UpdateZrAccProfileSecurity;
var UpdateZrAccProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileRequest, _super);
    function UpdateZrAccProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrAccProfileRequests)
    ], UpdateZrAccProfileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrAccProfileSecurity)
    ], UpdateZrAccProfileRequest.prototype, "security", void 0);
    return UpdateZrAccProfileRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileRequest = UpdateZrAccProfileRequest;
var UpdateZrAccProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateZrAccProfileResponse, _super);
    function UpdateZrAccProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateZrAccProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateZrAccProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateZrAccProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateZrAccProfileResponse.prototype, "updateZRAccProfile204ApplicationJSONObject", void 0);
    return UpdateZrAccProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateZrAccProfileResponse = UpdateZrAccProfileResponse;
