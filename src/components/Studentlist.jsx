import React, { useCallback, useMemo, useState } from "react";
import "./Studentlist.css";

const DEFAULT_FIELDS = [
  { key: "studentname", label: "Student Name", type: "text" },
  { key: "dateofbirth", label: "Date of Birth", type: "date" },
  { key: "fathername", label: "Father Name", type: "text" },
  { key: "mothername", label: "Mother Name", type: "text" },
  { key: "mobilenumber", label: "Mobile", type: "tel" },
  { key: "aadharcard", label: "Aadhar", type: "text" },
  { key: "email", label: "Email", type: "email" },
];

const Studentlist = ({ updatedData = [], setUpdatedData = () => {} }) => {
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({});

  const fields = useMemo(() => DEFAULT_FIELDS, []);

  const handleEditClick = useCallback((student) => {
    setEditingId(student.id);
    setEditForm({ ...student });
  }, []);

  const handleEditChange = useCallback((e) => {
    const { name, value } = e.target;
    setEditForm((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSave = useCallback((id) => {
    setUpdatedData((prev) =>
      prev.map((s) => (s.id === id ? { ...s, ...editForm, id } : s)),
    );
    setEditingId(null);
  }, [editForm, setUpdatedData]);

  const handleCancel = useCallback(() => {
    setEditingId(null);
    setEditForm({});
  }, []);

  const handleDelete = useCallback((id) => {
    setUpdatedData((prev) => prev.filter((s) => s.id !== id));
    if (editingId === id) handleCancel();
  }, [editingId, handleCancel, setUpdatedData]);

  return (
    <>
      <div className="sl-page">
        {/* Header */}
        <div className="sl-header">
          <div className="sl-badge">
            <span aria-hidden="true">🎓</span> School Management System
          </div>
          <h1>Student List</h1>
          <p>View, edit and manage all registered students</p>
        </div>

        {/* Card */}
        <div className="sl-card">
          <div className="sl-card-top">
            <h2>All Students</h2>
            <span className="sl-count">Total: {updatedData.length}</span>
          </div>

          {updatedData.length === 0 ? (
            <div className="sl-empty">
              <div className="icon">🎓</div>
              <h3>No Students Found</h3>
              <p>Please add students to see them listed here.</p>
            </div>
          ) : (
            <>
              {/* DESKTOP TABLE */}
              <div className="sl-table-wrap">
                <table className="sl-table">
                  <caption>Registered students list</caption>
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      {fields.map((f) => (
                        <th scope="col" key={f.key}>
                          {f.label}
                        </th>
                      ))}
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {updatedData.map((student, index) => {
                      const isEditing = editingId === student.id;
                      return (
                        <tr key={student.id} className={isEditing ? "editing-row" : ""}>
                          <td className="sl-sno">{index + 1}</td>
                          {fields.map((f) => (
                            <td key={f.key}>
                              {isEditing ? (
                                <input
                                  className="sl-edit-input"
                                  type={f.type}
                                  name={f.key}
                                  value={editForm[f.key] || ""}
                                  onChange={handleEditChange}
                                  aria-label={`${f.label} for ${student.studentname || `student #${index + 1}`}`}
                                />
                              ) : (
                                student[f.key] || "—"
                              )}
                            </td>
                          ))}
                          <td>
                            <div className="action-wrap">
                              {isEditing ? (
                                <>
                                  <button type="button" className="btn-save" onClick={() => handleSave(student.id)}>
                                    ✓ Save
                                  </button>
                                  <button type="button" className="btn-cancel" onClick={handleCancel}>
                                    ✕ Cancel
                                  </button>
                                </>
                              ) : (
                                <>
                                  <button type="button" className="btn-edit" onClick={() => handleEditClick(student)}>
                                    ✏ Edit
                                  </button>
                                  <button type="button" className="btn-delete" onClick={() => handleDelete(student.id)}>
                                    🗑 Delete
                                  </button>
                                </>
                              )}
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {/* MOBILE CARDS */}
              <div className="sl-cards-wrap">
                {updatedData.map((student, index) => {
                  const isEditing = editingId === student.id;
                  return (
                    <div key={student.id} className={`sl-mobile-card ${isEditing ? "editing-card" : ""}`}>
                      <div className="sl-mc-header">
                        <div className="sl-mc-name">
                          {isEditing ? (
                            <input
                              className="sl-edit-input"
                              type="text"
                              name="studentname"
                              value={editForm.studentname || ""}
                              onChange={handleEditChange}
                              placeholder="Student Name"
                              aria-label="Student Name"
                            />
                          ) : student.studentname || "—"}
                        </div>
                        <span className="sl-mc-sno">#{index + 1}</span>
                      </div>

                      <div className="sl-mc-grid">
                        {fields.filter((f) => f.key !== "studentname" && f.key !== "email").map((f) => (
                          <div className="sl-mc-field" key={f.key}>
                            <span className="sl-mc-label">{f.label}</span>
                            {isEditing ? (
                              <input
                                className="sl-edit-input"
                                type={f.type}
                                name={f.key}
                                value={editForm[f.key] || ""}
                                onChange={handleEditChange}
                                aria-label={f.label}
                              />
                            ) : (
                              <span className="sl-mc-value">{student[f.key] || "—"}</span>
                            )}
                          </div>
                        ))}
                        <div className="sl-mc-field full">
                          <span className="sl-mc-label">Email</span>
                          {isEditing ? (
                            <input
                              className="sl-edit-input"
                              type="email"
                              name="email"
                              value={editForm.email || ""}
                              onChange={handleEditChange}
                              aria-label="Email"
                            />
                          ) : (
                            <span className="sl-mc-value">{student.email || "—"}</span>
                          )}
                        </div>
                      </div>

                      <div className="sl-mc-actions">
                        {isEditing ? (
                          <>
                            <button type="button" className="btn-save" onClick={() => handleSave(student.id)}>
                              ✓ Save
                            </button>
                            <button type="button" className="btn-cancel" onClick={handleCancel}>
                              ✕ Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button type="button" className="btn-edit" onClick={() => handleEditClick(student)}>
                              ✏ Edit
                            </button>
                            <button type="button" className="btn-delete" onClick={() => handleDelete(student.id)}>
                              🗑 Delete
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Studentlist;