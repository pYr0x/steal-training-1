"format es6";

export function renderer(vars) {
  return `<div class="card">
            <h3 class="card-header">Featured</h3>
            <div class="card-block">
              <h4 class="card-title">Special title treatment</h4>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="${vars.btn.url}" class="btn btn-primary btn-sm">${vars.btn.name}</a>
            </div>
          </div>`
};