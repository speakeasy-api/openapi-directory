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
exports.TrackingfieldCreateResponse = exports.TrackingfieldCreateRequest = exports.TrackingfieldCreateTrackingField1 = exports.TrackingfieldCreateSecurity = exports.TrackingfieldCreateRequests = exports.TrackingfieldCreateTrackingField = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
// TrackingfieldCreateTrackingField
/**
 * Tracking Field
**/
var TrackingfieldCreateTrackingField = /** @class */ (function (_super) {
    __extends(TrackingfieldCreateTrackingField, _super);
    function TrackingfieldCreateTrackingField() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field, multipart_form, name=field" }),
        __metadata("design:type", String)
    ], TrackingfieldCreateTrackingField.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_values, multipart_form, name=recommended_values;json=true" }),
        __metadata("design:type", Array)
    ], TrackingfieldCreateTrackingField.prototype, "recommendedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required, multipart_form, name=required" }),
        __metadata("design:type", Boolean)
    ], TrackingfieldCreateTrackingField.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible, multipart_form, name=visible" }),
        __metadata("design:type", Boolean)
    ], TrackingfieldCreateTrackingField.prototype, "visible", void 0);
    return TrackingfieldCreateTrackingField;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldCreateTrackingField = TrackingfieldCreateTrackingField;
var TrackingfieldCreateRequests = /** @class */ (function (_super) {
    __extends(TrackingfieldCreateRequests, _super);
    function TrackingfieldCreateRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=application/json" }),
        __metadata("design:type", TrackingfieldCreateTrackingField)
    ], TrackingfieldCreateRequests.prototype, "trackingField", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", TrackingfieldCreateTrackingField)
    ], TrackingfieldCreateRequests.prototype, "trackingField1", void 0);
    return TrackingfieldCreateRequests;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldCreateRequests = TrackingfieldCreateRequests;
var TrackingfieldCreateSecurity = /** @class */ (function (_super) {
    __extends(TrackingfieldCreateSecurity, _super);
    function TrackingfieldCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], TrackingfieldCreateSecurity.prototype, "oAuth", void 0);
    return TrackingfieldCreateSecurity;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldCreateSecurity = TrackingfieldCreateSecurity;
// TrackingfieldCreateTrackingField1
/**
 * Tracking Field
**/
var TrackingfieldCreateTrackingField1 = /** @class */ (function (_super) {
    __extends(TrackingfieldCreateTrackingField1, _super);
    function TrackingfieldCreateTrackingField1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=field" }),
        __metadata("design:type", String)
    ], TrackingfieldCreateTrackingField1.prototype, "field", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], TrackingfieldCreateTrackingField1.prototype, "id", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=recommended_values" }),
        __metadata("design:type", Array)
    ], TrackingfieldCreateTrackingField1.prototype, "recommendedValues", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=required" }),
        __metadata("design:type", Boolean)
    ], TrackingfieldCreateTrackingField1.prototype, "required", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=visible" }),
        __metadata("design:type", Boolean)
    ], TrackingfieldCreateTrackingField1.prototype, "visible", void 0);
    return TrackingfieldCreateTrackingField1;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldCreateTrackingField1 = TrackingfieldCreateTrackingField1;
var TrackingfieldCreateRequest = /** @class */ (function (_super) {
    __extends(TrackingfieldCreateRequest, _super);
    function TrackingfieldCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackingfieldCreateRequests)
    ], TrackingfieldCreateRequest.prototype, "request", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackingfieldCreateSecurity)
    ], TrackingfieldCreateRequest.prototype, "security", void 0);
    return TrackingfieldCreateRequest;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldCreateRequest = TrackingfieldCreateRequest;
var TrackingfieldCreateResponse = /** @class */ (function (_super) {
    __extends(TrackingfieldCreateResponse, _super);
    function TrackingfieldCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], TrackingfieldCreateResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], TrackingfieldCreateResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Object)
    ], TrackingfieldCreateResponse.prototype, "headers", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], TrackingfieldCreateResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", TrackingfieldCreateTrackingField1)
    ], TrackingfieldCreateResponse.prototype, "trackingField", void 0);
    return TrackingfieldCreateResponse;
}(utils_1.SpeakeasyBase));
exports.TrackingfieldCreateResponse = TrackingfieldCreateResponse;
