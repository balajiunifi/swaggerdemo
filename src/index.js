import SwaggerUI from 'swagger-ui';
import * as $ from 'jquery';
import spec from './dcp_swagger.json';
import config from './configuration.json'

initSwagger();

function initSwagger() {
    let host = $("#host").val() || "localhost:8000";

    $("#swagger-ui").html("");
    SwaggerUI({
        dom_id: '#swagger-ui',
        spec: {...spec, host},
        filter: "",
        onComplete: () => {
            $(".auth-wrapper")
                .prepend(`
                    <div class="host-container">
                        <label>Host</label>
                        <input id="host" value="${host}"/>
                    </div>
                `);
            $("#host").on("blur", initSwagger);

            //update header
            $("header .subtitle").text(spec.info.version);
            $(".details .description").text(spec.info.description);

            //show everything
            $("body").show();
        }
    });

    if (config.read_only) {
        $(".dynamic-css")
            .html(`
                .btn.authorize, .authorization__btn, .btn.try-out__btn {
                    display: none !important;
                }
            `)
    }
}