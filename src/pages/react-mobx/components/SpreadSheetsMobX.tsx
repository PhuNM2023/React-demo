import { observer } from "mobx-react";
import React from "react";
import spreadSheetStore from "../store/spreadSheetsMobx.store";

const SpreadSheetsMobX = observer(() => {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th>Col</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>b</th>
          <td
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              spreadSheetStore.handleChange(
                "b",
                parseInt(e.currentTarget.textContent || "0", 10)
              )
            }
          >
            {spreadSheetStore.b}
          </td>
        </tr>
        <tr>
          <th>c</th>
          <td
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              spreadSheetStore.handleChange(
                "c",
                parseInt(e.currentTarget.textContent || "0", 10)
              )
            }
          >
            {spreadSheetStore.c}
          </td>
        </tr>
        <tr>
          <th>d</th>
          <td
            contentEditable
            suppressContentEditableWarning
            onBlur={(e) =>
              spreadSheetStore.handleChange(
                "d",
                parseInt(e.currentTarget.textContent || "0", 10)
              )
            }
          >
            {spreadSheetStore.d}
          </td>
        </tr>
        <tr>
          <th>a</th>
          <td>{spreadSheetStore.a}</td>
        </tr>
      </tbody>
    </table>
  );
});

export default SpreadSheetsMobX;
