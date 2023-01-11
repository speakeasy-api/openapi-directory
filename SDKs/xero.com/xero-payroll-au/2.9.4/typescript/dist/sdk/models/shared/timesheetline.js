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
exports.TimesheetLineInput = exports.TimesheetLine = void 0;
var utils_1 = require("../../../internal/utils");
var TimesheetLine = /** @class */ (function (_super) {
    __extends(TimesheetLine, _super);
    function TimesheetLine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EarningsRateID" }),
        __metadata("design:type", String)
    ], TimesheetLine.prototype, "earningsRateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumberOfUnits" }),
        __metadata("design:type", Array)
    ], TimesheetLine.prototype, "numberOfUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TrackingItemID" }),
        __metadata("design:type", String)
    ], TimesheetLine.prototype, "trackingItemID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], TimesheetLine.prototype, "updatedDateUTC", void 0);
    return TimesheetLine;
}(utils_1.SpeakeasyBase));
exports.TimesheetLine = TimesheetLine;
var TimesheetLineInput = /** @class */ (function (_super) {
    __extends(TimesheetLineInput, _super);
    function TimesheetLineInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EarningsRateID" }),
        __metadata("design:type", String)
    ], TimesheetLineInput.prototype, "earningsRateID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=NumberOfUnits" }),
        __metadata("design:type", Array)
    ], TimesheetLineInput.prototype, "numberOfUnits", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TrackingItemID" }),
        __metadata("design:type", String)
    ], TimesheetLineInput.prototype, "trackingItemID", void 0);
    return TimesheetLineInput;
}(utils_1.SpeakeasyBase));
exports.TimesheetLineInput = TimesheetLineInput;
