let all = document.querySelectorAll(".portfolio-card"),
    web = document.querySelectorAll("[filter-web]"),
    app = document.querySelectorAll("[filter-app]"),
    design = document.querySelectorAll("[filter-design]"),
    marketing = document.querySelectorAll("[filter-marketing]");

let filter__all = document.getElementById("filter__all"),
    filter__web = document.getElementById("filter__web"),
    filter__app = document.getElementById("filter__app"),
    filter__design = document.getElementById("filter__design"),
    filter__marketing = document.getElementById("filter__marketing");

// function filter() {
//     web.forEach(
//         (currentElement) => {
//             currentElement.classList.toggle("is-hidden");
//         }
//     )
// }
filter__all.addEventListener("click", filter);
filter__web.addEventListener("click", filter);
filter__app.addEventListener("click", filter);
filter__design.addEventListener("click", filter);
filter__marketing.addEventListener("click", filter);

function filter() {
    let active_filter = document.querySelector('input[name="portfolio-filter"]:checked').value;
    console.log(active_filter);

    if (active_filter == "filter_web") {

        all.forEach(
            (currentElement) => {
                currentElement.classList.add("is-hidden");
            }
        );
        web.forEach(
            (currentElement) => {
                currentElement.classList.toggle("is-hidden");
            }
        )
    } else if (active_filter == "filter_app") {
        all.forEach(
            (currentElement) => {
                currentElement.classList.add("is-hidden");
            }
        );
        app.forEach(
            (currentElement) => {
                currentElement.classList.toggle("is-hidden");
            }
        )

    } else if (active_filter == "filter_design") {
        all.forEach(
            (currentElement) => {
                currentElement.classList.add("is-hidden");
            }
        );
        design.forEach(
            (currentElement) => {
                currentElement.classList.toggle("is-hidden");
            }
        )

    } else if (active_filter == "filter_marketing") {
        all.forEach(
            (currentElement) => {
                currentElement.classList.add("is-hidden");
            }
        );
        marketing.forEach(
            (currentElement) => {
                currentElement.classList.toggle("is-hidden");
            }
        )

    } else if (active_filter == "filter_all") {
        all.forEach(
            (currentElement) => {
                currentElement.classList.remove("is-hidden");
            }
        );
    }
}