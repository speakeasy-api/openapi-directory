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
exports.UpdateZrLocationProfileResponse = exports.UpdateZrLocationProfileRequest = exports.UpdateZrLocationProfileSecurity = exports.UpdateZrLocationProfileRequests = exports.UpdateZrLocationProfileMultipartFormData = exports.UpdateZrLocationProfileMultipartFormDataBasic = exports.UpdateZrLocationProfileApplicationJson = exports.UpdateZrLocationProfileApplicationJsonBasic = exports.UpdateZrLocationProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateZrLocationProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfilePathParams, _super);
    function UpdateZrLocationProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=locationId" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfilePathParams.prototype, "locationId", void 0);
    return UpdateZrLocationProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfilePathParams = UpdateZrLocationProfilePathParams;
var UpdateZrLocationProfileApplicationJsonBasic = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileApplicationJsonBasic, _super);
    function UpdateZrLocationProfileApplicationJsonBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description " }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "supportPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileApplicationJsonBasic.prototype, "timezone", void 0);
    return UpdateZrLocationProfileApplicationJsonBasic;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileApplicationJsonBasic = UpdateZrLocationProfileApplicationJsonBasic;
var UpdateZrLocationProfileApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileApplicationJson, _super);
    function UpdateZrLocationProfileApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic" }),
        __metadata("design:type", UpdateZrLocationProfileApplicationJsonBasic)
    ], UpdateZrLocationProfileApplicationJson.prototype, "basic", void 0);
    return UpdateZrLocationProfileApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileApplicationJson = UpdateZrLocationProfileApplicationJson;
var UpdateZrLocationProfileMultipartFormDataBasic = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileMultipartFormDataBasic, _super);
    function UpdateZrLocationProfileMultipartFormDataBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=address" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "address", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=description " }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "description", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "supportPhone", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=timezone" }),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileMultipartFormDataBasic.prototype, "timezone", void 0);
    return UpdateZrLocationProfileMultipartFormDataBasic;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileMultipartFormDataBasic = UpdateZrLocationProfileMultipartFormDataBasic;
var UpdateZrLocationProfileMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileMultipartFormData, _super);
    function UpdateZrLocationProfileMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=basic;json=true" }),
        __metadata("design:type", UpdateZrLocationProfileMultipartFormDataBasic)
    ], UpdateZrLocationProfileMultipartFormData.prototype, "basic", void 0);
    return UpdateZrLocationProfileMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileMultipartFormData = UpdateZrLocationProfileMultipartFormData;
var UpdateZrLocationProfileRequests = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileRequests, _super);
    function UpdateZrLocationProfileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateZrLocationProfileApplicationJson)
    ], UpdateZrLocationProfileRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateZrLocationProfileMultipartFormData)
    ], UpdateZrLocationProfileRequests.prototype, "object1", void 0);
    return UpdateZrLocationProfileRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileRequests = UpdateZrLocationProfileRequests;
var UpdateZrLocationProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileSecurity, _super);
    function UpdateZrLocationProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateZrLocationProfileSecurity.prototype, "oAuth", void 0);
    return UpdateZrLocationProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileSecurity = UpdateZrLocationProfileSecurity;
var UpdateZrLocationProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileRequest, _super);
    function UpdateZrLocationProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationProfilePathParams)
    ], UpdateZrLocationProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationProfileRequests)
    ], UpdateZrLocationProfileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateZrLocationProfileSecurity)
    ], UpdateZrLocationProfileRequest.prototype, "security", void 0);
    return UpdateZrLocationProfileRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileRequest = UpdateZrLocationProfileRequest;
var UpdateZrLocationProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateZrLocationProfileResponse, _super);
    function UpdateZrLocationProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateZrLocationProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateZrLocationProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateZrLocationProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateZrLocationProfileResponse.prototype, "updateZRLocationProfile200ApplicationJSONAny", void 0);
    return UpdateZrLocationProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateZrLocationProfileResponse = UpdateZrLocationProfileResponse;
