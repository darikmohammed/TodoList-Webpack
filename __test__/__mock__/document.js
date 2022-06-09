import { JSDOM } from 'jsdom';

const dom = new JSDOM(
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>To-do List</title>
  </head>
  
  <body>
      <main>
          <section class="to-do-list">
              <h1> To-Do List</h1>
              <div class="list-container">
                  <div class="list-heading">
                      <h2 class="">Today's To Do</h2>
                      <button type="button" class="refresh-list"><i class="fa-solid fa-arrows-rotate"></i></button>
                  </div>
                  <hr>
                  <div class="list-add">
                      <form action="#" method="get" id="list-form" class="add-form">
                          <input type="text" name="add-list" id="add-list" placeholder="Add to your list..." required>
                          <button type="submit" class="add-list-btn"><i class="fa-solid fa-check"></i></button>
                      </form>
  
                  </div>
                  <hr>
                  <div class="view-list">
                      <ul id="dynamic-list">
                          <!-- dynamically create a to-do List -->
                      </ul>
                  </div>
                  <hr>
                  <div class="delete-list">
                      <button type="button" class="delete-checked">Clear all completed</button>
                  </div>
              </div>
          </section>
      </main>
  </body>
  
  </html>`,
);
global.document = dom.window.document;
global.window = dom.window;