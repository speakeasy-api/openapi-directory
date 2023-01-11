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
exports.ParticipantWebinarFeedbackResponse = exports.ParticipantWebinarFeedbackRequest = exports.ParticipantWebinarFeedback200ApplicationJson = exports.ParticipantWebinarFeedback200ApplicationJsonParticipants = exports.ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum = exports.ParticipantWebinarFeedbackQueryParams = exports.ParticipantWebinarFeedbackTypeEnum = exports.ParticipantWebinarFeedbackPathParams = void 0;
var utils_1 = require("../../../internal/utils");
var ParticipantWebinarFeedbackPathParams = /** @class */ (function (_super) {
    __extends(ParticipantWebinarFeedbackPathParams, _super);
    function ParticipantWebinarFeedbackPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "pathParam, style=simple;explode=false;name=webinarId" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedbackPathParams.prototype, "webinarId", void 0);
    return ParticipantWebinarFeedbackPathParams;
}(utils_1.SpeakeasyBase));
exports.ParticipantWebinarFeedbackPathParams = ParticipantWebinarFeedbackPathParams;
var ParticipantWebinarFeedbackTypeEnum;
(function (ParticipantWebinarFeedbackTypeEnum) {
    ParticipantWebinarFeedbackTypeEnum["Past"] = "past";
    ParticipantWebinarFeedbackTypeEnum["PastOne"] = "pastOne";
    ParticipantWebinarFeedbackTypeEnum["Live"] = "live";
})(ParticipantWebinarFeedbackTypeEnum = exports.ParticipantWebinarFeedbackTypeEnum || (exports.ParticipantWebinarFeedbackTypeEnum = {}));
var ParticipantWebinarFeedbackQueryParams = /** @class */ (function (_super) {
    __extends(ParticipantWebinarFeedbackQueryParams, _super);
    function ParticipantWebinarFeedbackQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=next_page_token" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedbackQueryParams.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=page_size" }),
        __metadata("design:type", Number)
    ], ParticipantWebinarFeedbackQueryParams.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=type" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedbackQueryParams.prototype, "type", void 0);
    return ParticipantWebinarFeedbackQueryParams;
}(utils_1.SpeakeasyBase));
exports.ParticipantWebinarFeedbackQueryParams = ParticipantWebinarFeedbackQueryParams;
var ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum;
(function (ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum) {
    ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum["Good"] = "GOOD";
    ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum["NotGood"] = "NOT GOOD";
})(ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum = exports.ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum || (exports.ParticipantWebinarFeedback200ApplicationJsonParticipantsQualityEnum = {}));
var ParticipantWebinarFeedback200ApplicationJsonParticipants = /** @class */ (function (_super) {
    __extends(ParticipantWebinarFeedback200ApplicationJsonParticipants, _super);
    function ParticipantWebinarFeedback200ApplicationJsonParticipants() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date_time" }),
        __metadata("design:type", Date)
    ], ParticipantWebinarFeedback200ApplicationJsonParticipants.prototype, "dateTime", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedback200ApplicationJsonParticipants.prototype, "email", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=quality" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedback200ApplicationJsonParticipants.prototype, "quality", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=user_id" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedback200ApplicationJsonParticipants.prototype, "userId", void 0);
    return ParticipantWebinarFeedback200ApplicationJsonParticipants;
}(utils_1.SpeakeasyBase));
exports.ParticipantWebinarFeedback200ApplicationJsonParticipants = ParticipantWebinarFeedback200ApplicationJsonParticipants;
var ParticipantWebinarFeedback200ApplicationJson = /** @class */ (function (_super) {
    __extends(ParticipantWebinarFeedback200ApplicationJson, _super);
    function ParticipantWebinarFeedback200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=next_page_token" }),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedback200ApplicationJson.prototype, "nextPageToken", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=page_size" }),
        __metadata("design:type", Number)
    ], ParticipantWebinarFeedback200ApplicationJson.prototype, "pageSize", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=participants", elemType: ParticipantWebinarFeedback200ApplicationJsonParticipants }),
        __metadata("design:type", Array)
    ], ParticipantWebinarFeedback200ApplicationJson.prototype, "participants", void 0);
    return ParticipantWebinarFeedback200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ParticipantWebinarFeedback200ApplicationJson = ParticipantWebinarFeedback200ApplicationJson;
var ParticipantWebinarFeedbackRequest = /** @class */ (function (_super) {
    __extends(ParticipantWebinarFeedbackRequest, _super);
    function ParticipantWebinarFeedbackRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ParticipantWebinarFeedbackPathParams)
    ], ParticipantWebinarFeedbackRequest.prototype, "pathParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ParticipantWebinarFeedbackQueryParams)
    ], ParticipantWebinarFeedbackRequest.prototype, "queryParams", void 0);
    return ParticipantWebinarFeedbackRequest;
}(utils_1.SpeakeasyBase));
exports.ParticipantWebinarFeedbackRequest = ParticipantWebinarFeedbackRequest;
var ParticipantWebinarFeedbackResponse = /** @class */ (function (_super) {
    __extends(ParticipantWebinarFeedbackResponse, _super);
    function ParticipantWebinarFeedbackResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ParticipantWebinarFeedbackResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ParticipantWebinarFeedbackResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ParticipantWebinarFeedbackResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ParticipantWebinarFeedback200ApplicationJson)
    ], ParticipantWebinarFeedbackResponse.prototype, "participantWebinarFeedback200ApplicationJSONObject", void 0);
    return ParticipantWebinarFeedbackResponse;
}(utils_1.SpeakeasyBase));
exports.ParticipantWebinarFeedbackResponse = ParticipantWebinarFeedbackResponse;
