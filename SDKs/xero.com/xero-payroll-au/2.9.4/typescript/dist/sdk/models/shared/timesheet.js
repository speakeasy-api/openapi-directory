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
exports.TimesheetInput = exports.Timesheet = void 0;
var utils_1 = require("../../../internal/utils");
var timesheetstatusenum_1 = require("./timesheetstatusenum");
var timesheetline_1 = require("./timesheetline");
var validationerror_1 = require("./validationerror");
var timesheetline_2 = require("./timesheetline");
var Timesheet = /** @class */ (function (_super) {
    __extends(Timesheet, _super);
    function Timesheet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], Timesheet.prototype, "employeeID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], Timesheet.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Hours" }),
        __metadata("design:type", Number)
    ], Timesheet.prototype, "hours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], Timesheet.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], Timesheet.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimesheetID" }),
        __metadata("design:type", String)
    ], Timesheet.prototype, "timesheetID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimesheetLines", elemType: timesheetline_1.TimesheetLine }),
        __metadata("design:type", Array)
    ], Timesheet.prototype, "timesheetLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=UpdatedDateUTC" }),
        __metadata("design:type", String)
    ], Timesheet.prototype, "updatedDateUTC", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ValidationErrors", elemType: validationerror_1.ValidationError }),
        __metadata("design:type", Array)
    ], Timesheet.prototype, "validationErrors", void 0);
    return Timesheet;
}(utils_1.SpeakeasyBase));
exports.Timesheet = Timesheet;
var TimesheetInput = /** @class */ (function (_super) {
    __extends(TimesheetInput, _super);
    function TimesheetInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EmployeeID" }),
        __metadata("design:type", String)
    ], TimesheetInput.prototype, "employeeID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=EndDate" }),
        __metadata("design:type", String)
    ], TimesheetInput.prototype, "endDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Hours" }),
        __metadata("design:type", Number)
    ], TimesheetInput.prototype, "hours", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=StartDate" }),
        __metadata("design:type", String)
    ], TimesheetInput.prototype, "startDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=Status" }),
        __metadata("design:type", String)
    ], TimesheetInput.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimesheetID" }),
        __metadata("design:type", String)
    ], TimesheetInput.prototype, "timesheetID", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=TimesheetLines", elemType: timesheetline_2.TimesheetLineInput }),
        __metadata("design:type", Array)
    ], TimesheetInput.prototype, "timesheetLines", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=ValidationErrors", elemType: validationerror_1.ValidationError }),
        __metadata("design:type", Array)
    ], TimesheetInput.prototype, "validationErrors", void 0);
    return TimesheetInput;
}(utils_1.SpeakeasyBase));
exports.TimesheetInput = TimesheetInput;
