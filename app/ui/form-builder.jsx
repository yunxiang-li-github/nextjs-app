"use client";
import * as React from "react";

export default function FormBuilder() {
  const [formFields, setFormFields] = React.useState([]);

  const handleAddFormField = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newField = {
      id: new Date().getTime(),
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: "",
    };

    setFormFields([...formFields, newField]);
    e.target.reset();
  };

  const handleUpdateFormField = (id, updatedField) => {
    const updatedFormFields = formFields.map((field) =>
      field.id === id ? { ...field, ...updatedField } : field
    );
    setFormFields(updatedFormFields);
  };

  const handleDeleteFormField = (id) => {
    const updatedFormFields = formFields.filter((field) => field.id !== id);
    setFormFields(updatedFormFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div>
      <h1 className="uppercase size-6 w-full font-bold mb-4">Form Builder</h1>
      <form id="form-builder" onSubmit={handleAddFormField}>
        <fieldset className="grid gap-3 border border-yellow-800 p-6 rounded-2xl mb-4">
          <legend>Add a field</legend>
          <label htmlFor="type">Field Type</label>
          <select
            name="type"
            id="type"
            className="bg-charcoal rounded-lg flex justify-between border-8 border-charcoal focus:outline-none"
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <div>
            <label htmlFor="required">Required</label>
            <input
              type="checkbox"
              name="required"
              id="required"
              className="block"
            />
          </div>
          <label htmlFor="label">Label</label>
          <input
            required
            type="text"
            name="label"
            id="label"
            placeholder="Enter a label"
            className="primary"
          />
          <label htmlFor="placeholder">Placeholder</label>
          <input
            required
            type="text"
            id="placeholder"
            name="placeholder"
            placeholder="Enter a placeholder"
            className="primary"
          />
          <button type="submit" className="primary">
            Add Form Field
          </button>
        </fieldset>
      </form>
      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset className="grid gap-3 border border-yellow-800 p-6 rounded-2xl bg-coal">
          <legend>Form Fields</legend>
          <ul>
            {formFields.map((field) => (
              <li key={field.id} className="grid gap-3">
                <label htmlFor={`input-${field.id}`}>{field.label}</label>
                <input
                  id={`input-${field.id}`}
                  required={field.required}
                  placeholder={field.placeholder}
                  type={field.type}
                  value={field.value}
                  onChange={(e) =>
                    handleUpdateFormField(field.id, { value: e.target.value })
                  }
                  className="primary"
                />
                <button
                  type="button"
                  className="secondary"
                  onClick={() => handleDeleteFormField(field.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
          <span>Your form fields will show here</span>
        </fieldset>
      </form>
    </div>
  );
}
