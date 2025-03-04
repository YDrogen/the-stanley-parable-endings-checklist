import { useState } from "react";
import { useLocalStorage } from "../contexts/local-storage";

export const ExportSection = () => {
  const { exportString, overrideState } = useLocalStorage();

  const [importString, setImportString] = useState("");

  const importSave = () => {
    const newSave = atob(importString);

    overrideState(JSON.parse(newSave));
  };

  const copyExportString = async () => {
    await navigator.clipboard.writeText(exportString);

    alert("Export string copied to clipboard!");
  };

  return (
    <div className="flex gap-8">
      <div className="my-8">
        <h4>Import</h4>

        <div className="gap-4 flex">
          <input
            type="text"
            className="border-gray-300 border-2 w-64 rounded-md"
            placeholder="Paste your exported string here"
            value={importString}
            onChange={(e) => {
              setImportString(e.target.value);
            }}
          />
          <button
            onClick={importSave}
            className="rounded-2xl border-amber-200 border-2 p-4 bg-amber-50 font-bold"
          >
            IMPORT
          </button>
        </div>
      </div>

      <div className="my-8">
        <h4>Export</h4>

        <div className="gap-4 flex">
          <input
            type="text"
            className="border-gray-300 border-2 w-64 rounded-md"
            value={exportString}
            readOnly
            disabled
          />
          <button
            onClick={copyExportString}
            className="rounded-2xl border-amber-200 border-2 p-4 bg-amber-50 font-bold"
          >
            EXPORT
          </button>
        </div>
      </div>
    </div>
  );
};
