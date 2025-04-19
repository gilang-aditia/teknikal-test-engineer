import { useState } from "react";
import "./App.css";

function App() {
  // inisalisasi
  const [students, setStudents] = useState(
    Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      aspects: [1, 2, 6, 10],
    }))
  );

  // untuk input
  const handleInputChange = (studentIndex, aspectIndex, value) => {
    const newStudents = [...students];
    newStudents[studentIndex].aspects[aspectIndex] = value;
    setStudents(newStudents);
  };

  // untuk output
  const generateOutput = () => {
    const output = {};

    // buat object
    for (let aspectIndex = 0; aspectIndex < 4; aspectIndex++) {
      const aspectKey = `aspek_penilaian_${aspectIndex + 1}`;
      output[aspectKey] = {};

      // tambah value
      for (let studentIndex = 0; studentIndex < 10; studentIndex++) {
        const studentKey = `mahasiswa_${studentIndex + 1}`;
        output[aspectKey][studentKey] =
          students[studentIndex].aspects[aspectIndex];
      }
    }

    // alert hasil
    console.log(JSON.stringify(output, null, 2));
    alert("Data berhasil disimpan! Lihat output JSON di console.");
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">Aplikasi Penilaian Mahasiswa</h1>

        <div className="table-container">
          <table className="assessment-table">
            <thead>
              <tr>
                <th></th>
                <th>
                  Aspek
                  <br />
                  penilaian 1
                </th>
                <th>
                  Aspek
                  <br />
                  penilaian 2
                </th>
                <th>
                  Aspek
                  <br />
                  penilaian 3
                </th>
                <th>
                  Aspek
                  <br />
                  penilaian 4
                </th>
              </tr>
            </thead>
            <tbody>
              {students.map((student, studentIndex) => (
                <tr key={student.id}>
                  <td className="student-cell">
                    <div className="avatar">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <span>Mahasiswa {student.id}</span>
                  </td>
                  {student.aspects.map((value, aspectIndex) => (
                    <td key={aspectIndex} className="value-cell">
                      <div className="input-group">
                        <input
                          type="number"
                          min="1"
                          max="10"
                          value={value}
                          onChange={(e) =>
                            handleInputChange(
                              studentIndex,
                              aspectIndex,
                              Number.parseInt(e.target.value) || 1
                            )
                          }
                          className="value-input"
                        />
                        <span className="separator">-</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="button-container">
          <button onClick={generateOutput} className="save-button">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
