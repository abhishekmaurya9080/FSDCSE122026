const root = document.getElementById('container');
const btn = document.getElementById('btn');
const tableContainer = document.getElementById("tablecontainer");

// Elements initialized once
const h2 = document.createElement('h2');
h2.textContent = 'Resume Builder';

const loader = document.createElement('div');
loader.textContent = "Building....";

const img = document.createElement('img');
img.src = './img.jpg';
img.setAttribute('height', '100');
img.setAttribute('width', '100');

function buildResume() {
    try {
        // Clear old contents to avoid duplicate builds on multiple clicks
        root.innerHTML = '';
        tableContainer.innerHTML = '';

        // Display loader
        root.appendChild(loader);

        // Simulate async operation
        setTimeout(() => {
            // Remove loader and display content after 2 seconds
            loader.remove();
            root.appendChild(h2);
            root.appendChild(img);

            // =========================
            // CREATE TABLE
            // =========================
            const table = document.createElement("table");
            const headerRow = document.createElement("tr");
            const headers = ["Name", "Age", "Course"];

            headers.forEach((header) => {
                const th = document.createElement("th");
                th.textContent = header;
                headerRow.appendChild(th);
            });
            table.appendChild(headerRow);

            // =========================
            // TABLE DATA
            // =========================
            const students = [
                ["Abhishek", 20, "B.Tech"],
                ["Rahul", 21, "BCA"],
                ["Priya", 20, "MCA"]
            ];

            students.forEach((student) => {
                const row = document.createElement("tr");

                student.forEach((data) => {
                    const td = document.createElement("td");
                    td.textContent = data;
                    row.appendChild(td);
                });

                table.appendChild(row);
            });

            // Append table to container
            tableContainer.appendChild(table);

        }, 2000);

    } catch (e) {
        console.error(e);
        loader.textContent = 'Error: ' + e.message;
    } finally {
        console.log('hello Boss');
    }
}

btn.addEventListener('click', buildResume);