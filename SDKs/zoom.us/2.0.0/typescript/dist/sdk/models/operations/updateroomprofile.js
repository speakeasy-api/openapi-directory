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
exports.UpdateRoomProfileResponse = exports.UpdateRoomProfileRequest = exports.UpdateRoomProfileSecurity = exports.UpdateRoomProfileRequests = exports.UpdateRoomProfileMultipartFormData = exports.UpdateRoomProfileMultipartFormDataBasic = exports.UpdateRoomProfileApplicationJson = exports.UpdateRoomProfileApplicationJsonBasic = exports.UpdateRoomProfilePathParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var UpdateRoomProfilePathParams = /** @class */ (function (_super) {
    __extends(UpdateRoomProfilePathParams, _super);
    function UpdateRoomProfilePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=roomId" }),
        __metadata("design:type", String)
    ], UpdateRoomProfilePathParams.prototype, "roomId", void 0);
    return UpdateRoomProfilePathParams;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfilePathParams = UpdateRoomProfilePathParams;
var UpdateRoomProfileApplicationJsonBasic = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileApplicationJsonBasic, _super);
    function UpdateRoomProfileApplicationJsonBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_room_in_contacts" }),
        __metadata("design:type", Boolean)
    ], UpdateRoomProfileApplicationJsonBasic.prototype, "hideRoomInContacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileApplicationJsonBasic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], UpdateRoomProfileApplicationJsonBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileApplicationJsonBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileApplicationJsonBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileApplicationJsonBasic.prototype, "supportPhone", void 0);
    return UpdateRoomProfileApplicationJsonBasic;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileApplicationJsonBasic = UpdateRoomProfileApplicationJsonBasic;
var UpdateRoomProfileApplicationJson = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileApplicationJson, _super);
    function UpdateRoomProfileApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=basic" }),
        __metadata("design:type", UpdateRoomProfileApplicationJsonBasic)
    ], UpdateRoomProfileApplicationJson.prototype, "basic", void 0);
    return UpdateRoomProfileApplicationJson;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileApplicationJson = UpdateRoomProfileApplicationJson;
var UpdateRoomProfileMultipartFormDataBasic = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileMultipartFormDataBasic, _super);
    function UpdateRoomProfileMultipartFormDataBasic() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=hide_room_in_contacts" }),
        __metadata("design:type", Boolean)
    ], UpdateRoomProfileMultipartFormDataBasic.prototype, "hideRoomInContacts", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileMultipartFormDataBasic.prototype, "name", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required_code_to_ext" }),
        __metadata("design:type", Boolean)
    ], UpdateRoomProfileMultipartFormDataBasic.prototype, "requiredCodeToExt", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=room_passcode" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileMultipartFormDataBasic.prototype, "roomPasscode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_email" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileMultipartFormDataBasic.prototype, "supportEmail", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=support_phone" }),
        __metadata("design:type", String)
    ], UpdateRoomProfileMultipartFormDataBasic.prototype, "supportPhone", void 0);
    return UpdateRoomProfileMultipartFormDataBasic;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileMultipartFormDataBasic = UpdateRoomProfileMultipartFormDataBasic;
var UpdateRoomProfileMultipartFormData = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileMultipartFormData, _super);
    function UpdateRoomProfileMultipartFormData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "multipart_form, name=basic;json=true" }),
        __metadata("design:type", UpdateRoomProfileMultipartFormDataBasic)
    ], UpdateRoomProfileMultipartFormData.prototype, "basic", void 0);
    return UpdateRoomProfileMultipartFormData;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileMultipartFormData = UpdateRoomProfileMultipartFormData;
var UpdateRoomProfileRequests = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileRequests, _super);
    function UpdateRoomProfileRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateRoomProfileApplicationJson)
    ], UpdateRoomProfileRequests.prototype, "object", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", UpdateRoomProfileMultipartFormData)
    ], UpdateRoomProfileRequests.prototype, "object1", void 0);
    return UpdateRoomProfileRequests;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileRequests = UpdateRoomProfileRequests;
var UpdateRoomProfileSecurity = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileSecurity, _super);
    function UpdateRoomProfileSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], UpdateRoomProfileSecurity.prototype, "oAuth", void 0);
    return UpdateRoomProfileSecurity;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileSecurity = UpdateRoomProfileSecurity;
var UpdateRoomProfileRequest = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileRequest, _super);
    function UpdateRoomProfileRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateRoomProfilePathParams)
    ], UpdateRoomProfileRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateRoomProfileRequests)
    ], UpdateRoomProfileRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", UpdateRoomProfileSecurity)
    ], UpdateRoomProfileRequest.prototype, "security", void 0);
    return UpdateRoomProfileRequest;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileRequest = UpdateRoomProfileRequest;
var UpdateRoomProfileResponse = /** @class */ (function (_super) {
    __extends(UpdateRoomProfileResponse, _super);
    function UpdateRoomProfileResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], UpdateRoomProfileResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], UpdateRoomProfileResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], UpdateRoomProfileResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], UpdateRoomProfileResponse.prototype, "updateRoomProfile204ApplicationJSONObject", void 0);
    return UpdateRoomProfileResponse;
}(utils_1.SpeakeasyBase));
exports.UpdateRoomProfileResponse = UpdateRoomProfileResponse;
