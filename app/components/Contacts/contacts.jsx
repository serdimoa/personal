import React from 'react';
import SweetAlert from 'sweetalert-react';

class Contacts extends React.Component {
  static methodsAreOk() {
    return true;
  }

  constructor() {
    super();
    this.state = {
      alert: {
        show: false,
        type: '',
        title: '',
        text: '',
      },
      showLoading: false,
     
    };
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }


  onSubmitForm(e) {
    e.preventDefault();
    const json = JSON.stringify({
      Name: this.name.value,
      Email: this.email.value,
      Company: this.company.value,
    });
    const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://formspree.io/serdimoa@gmail.com', true);
    xhr.onreadystatechange = (() => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (JSON.parse(xhr.responseText).success === 'email sent') {
            this.setState({
              alert: {
                show: true,
                type: 'success',
                title: 'Ваше сообщение отправлено',
                text: 'Я с вами свяжусь в ближайшее время',
              },
            });
          } else {
            this.setState({
              alert: {
                show: true,
                type: 'error',
                title: 'Ваше сообщение не отправлено',
                text: 'Повторите позже, либо просто напишите мне на почту serdimoa@gmail.com',
              },
            });
          }
        } else {
          this.setState({
            alert: {
              show: true,
              type: 'error',
              title: 'Ваше сообщение не отправлено',
              text: 'Повторите позже, либо просто напишите мне на почту serdimoa@gmail.com',
            },
          });
        }
      }
    });
    this.setState({ showLoading: true });
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(json);
  }

  render() {
    return (
      <div className="contacts">
        <div className="contacts__content clearfix">
          <div className="left">
            <p className="phone">
              Звоните:
              <a href="tel:+79324366699" className="phone__content">8 932 43 666 99<i className="material-icons">touch_app</i></a>
            </p>
            <p className="email">
              Пишите:
              <a href="mailto:serdimoa@gmail.com" className="email__content">serdimoa @gmail.com<i className="material-icons">touch_app</i></a>
            </p>
          </div>
          <div className="right">
            <div className="social">
              <a className="social__gh" rel="noopener noreferrer" target="_blank" href="https://github.com/serdimoa">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="512px"
                  height="512px"
                  viewBox="0 0 512 512"
                  style={{ enableBackground: 'new 0 0 512 512' }}
                  >
                  <g>
                    <path
                      d="M117.639,124.36c-25.396,0-47.242,8.403-65.542,25.208c-19.043,17.926-28.57,40.33-28.57,67.218
                      c0,17.926, 5.188, 34.731, 15.647, 50.416c9.337, 14.563, 19.09, 23.903, 31.889, 28.012v1.121c-12.799, 5.224-18.483, 18.295-18.483, 39.209
                    c0, 16.062, 5.686, 28.011, 18.483, 35.854v1.121c-35.327, 11.571-51.496, 33.047-51.496, 64.413c0, 27.269, 11.874, 47.244, 35.033, 59.939
                    C72.895, 506.959, 96.389, 512, 124.773, 512c69.085, 0, 103.703-28.941, 103.703-86.832c0-36.223-26.661-58.441-80.064-66.658
                    c-12.323-1.863-21.643-6.348-27.991-13.445c-4.854-4.854-7.271-9.709-7.271-14.562c0-13.815, 7.479-21.848, 22.41-24.088
                    c22.779-3.356, 41.364-13.912, 55.743-31.647c14.375-17.74, 21.565-38.56, 21.565-62.458c0-7.469-2.259-15.498-5.244-24.086
                    c9.709-2.244, 16.525-4.297, 21.646-6.166V124.36c-22.527, 8.964-43.495, 13.442-61.421, 13.442
                    C152.162, 128.841, 135.937, 124.36, 117.639, 124.36z M123.801, 403.885c31.372, 0, 47.052, 9.521, 47.052, 28.57
                    c0, 20.168-14.377, 30.246-43.132, 30.246c-32.862, 0-49.293-9.711-49.293-29.127C78.427, 413.779, 93.55, 403.885, 123.801, 403.885z
                    M119.88, 256c-23.527, 0-35.293-12.882-35.293-38.654c0-27.631, 11.766-41.453, 35.293-41.453c11.201, 0, 19.979, 4.298, 26.326, 12.884
                    c5.229, 7.845, 7.845, 17.18, 7.845, 28.011C154.051, 242.927, 142.658, 256, 119.88, 256z M290.191, 0c-10.828, 0-20.069, 4.107-27.728, 12.324
                    c-7.656, 8.218-11.484, 18.108-11.484, 29.688c0, 11.205, 3.829, 20.91, 11.484, 29.129c7.654, 8.217, 16.896, 12.32, 27.728, 12.32
                    c10.455, 0, 19.515-4.104, 27.171-12.32c7.655-8.219, 11.479-17.924, 11.479-29.129c0-11.58-3.824-21.472-11.479-29.688
                    C309.703, 4.107, 300.646, 0, 290.191, 0z M321.565, 127.999h-63.304c0.747, 7.168-0.32, 18.021-0.32, 35.57v174.216
                    c0, 17.928, 1.067, 32.387, 0.32, 38.018h63.304c-0.75-8.188-2.697-22.334-2.697-41.379V162.451
                    C318.865, 146.019, 320.815, 135.167, 321.565, 127.999z M461.168, 322.1c-16.437, 0-24.541-12.514-24.541-37.533V181.247h24.932
                    c4.479, 0, 8.517-0.246, 13.56, 0.123c5.043, 0.374, 7.076, 0.125, 9.64, 0.125V128h-48.129v-23.808c0-8.961, 1.407-17.151, 2.526-22.271
                    h-64.979c1.121, 5.12, 1.015, 12.938, 1.015, 23.395V128h-28.16v53.494c7.683-1.12, 14.545-1.678, 19.397-1.678l8.763, 0.559v0.292l0, 0
                    v101.101c0, 31.371, 3.979, 54.336, 11.817, 68.9c10.461, 19.42, 28.812, 29.129, 56.067, 29.129c19.425, 0, 36.56-3.732, 49.356-11.205v-56.016
                    C482.196, 318.926, 472.742, 322.1, 461.168, 322.1z"
                    />
                  </g>
                </svg>
              </a>
              <a className="social__vk" rel="noopener noreferrer" target="_blank" href="https://vk.com/serdimoa">
                <svg
                  version="1.1"
                  id="Capa_1"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="548.358px"
                  height="548.358px"
                  viewBox="0 0 548.358 548.358"
                  style={{ enableBackground: 'new 0 0 548.358 548.358' }}
                  >
                  <g>
                    <path
                      d="M545.451,400.298c-0.664-1.431-1.283-2.618-1.858-3.569c-9.514-17.135-27.695-38.167-54.532-63.102l-0.567-0.571
                      l-0.284-0.28l-0.287-0.287h-0.288c-12.18-11.611-19.893-19.418-23.123-23.415c-5.91-7.614-7.234-15.321-4.004-23.13
                    c2.282-5.9, 10.854-18.36, 25.696-37.397c7.807-10.089, 13.99-18.175, 18.556-24.267c32.931-43.78, 47.208-71.756, 42.828-83.939
                    l-1.701-2.847c-1.143-1.714-4.093-3.282-8.846-4.712c-4.764-1.427-10.853-1.663-18.278-0.712l-82.224, 0.568
                    c-1.332-0.472-3.234-0.428-5.712, 0.144c-2.475, 0.572-3.713, 0.859-3.713, 0.859l-1.431, 0.715l-1.136, 0.859
                    c-0.952, 0.568-1.999, 1.567-3.142, 2.995c-1.137, 1.423-2.088, 3.093-2.848, 4.996c-8.952, 23.031-19.13, 44.444-30.553, 64.238
                    c-7.043, 11.803-13.511, 22.032-19.418, 30.693c-5.899, 8.658-10.848, 15.037-14.842, 19.126c-4, 4.093-7.61, 7.372-10.852, 9.849
                    c-3.237, 2.478-5.708, 3.525-7.419, 3.142c-1.715-0.383-3.33-0.763-4.859-1.143c-2.663-1.714-4.805-4.045-6.42-6.995
                    c-1.622-2.95-2.714-6.663-3.285-11.136c-0.568-4.476-0.904-8.326-1-11.563c-0.089-3.233-0.048-7.806, 0.145-13.706
                    c0.198-5.903, 0.287-9.897, 0.287-11.991c0-7.234, 0.141-15.085, 0.424-23.555c0.288-8.47, 0.521-15.181, 0.716-20.125
                    c0.194-4.949, 0.284-10.185, 0.284-15.705s-0.336-9.849-1-12.991c-0.656-3.138-1.663-6.184-2.99-9.137
                    c-1.335-2.95-3.289-5.232-5.853-6.852c-2.569-1.618-5.763-2.902-9.564-3.856c-10.089-2.283-22.936-3.518-38.547-3.71
                    c-35.401-0.38-58.148, 1.906-68.236, 6.855c-3.997, 2.091-7.614, 4.948-10.848, 8.562c-3.427, 4.189-3.905, 6.475-1.431, 6.851
                    c11.422, 1.711, 19.508, 5.804, 24.267, 12.275l1.715, 3.429c1.334, 2.474, 2.666, 6.854, 3.999, 13.134c1.331, 6.28, 2.19, 13.227, 2.568, 20.837
                    c0.95, 13.897, 0.95, 25.793, 0, 35.689c-0.953, 9.9-1.853, 17.607-2.712, 23.127c-0.859, 5.52-2.143, 9.993-3.855, 13.418
                    c-1.715, 3.426-2.856, 5.52-3.428, 6.28c-0.571, 0.76-1.047, 1.239-1.425, 1.427c-2.474, 0.948-5.047, 1.431-7.71, 1.431
                    c-2.667, 0-5.901-1.334-9.707-4c-3.805-2.666-7.754-6.328-11.847-10.992c-4.093-4.665-8.709-11.184-13.85-19.558
                    c-5.137-8.374-10.467-18.271-15.987-29.691l-4.567-8.282c-2.855-5.328-6.755-13.086-11.704-23.267
                    c-4.952-10.185-9.329-20.037-13.134-29.554c-1.521-3.997-3.806-7.04-6.851-9.134l-1.429-0.859c-0.95-0.76-2.475-1.567-4.567-2.427
                    c-2.095-0.859-4.281-1.475-6.567-1.854l-78.229, 0.568c-7.994, 0-13.418, 1.811-16.274, 5.428l-1.143, 1.711
                    C0.288, 140.146, 0, 141.668, 0, 143.763c0, 2.094, 0.571, 4.664, 1.714, 7.707c11.42, 26.84, 23.839, 52.725, 37.257, 77.659
                    c13.418, 24.934, 25.078, 45.019, 34.973, 60.237c9.897, 15.229, 19.985, 29.602, 30.264, 43.112c10.279, 13.515, 17.083, 22.176, 20.412, 25.981
                    c3.333, 3.812, 5.951, 6.662, 7.854, 8.565l7.139, 6.851c4.568, 4.569, 11.276, 10.041, 20.127, 16.416
                    c8.853, 6.379, 18.654, 12.659, 29.408, 18.85c10.756, 6.181, 23.269, 11.225, 37.546, 15.126c14.275, 3.905, 28.169, 5.472, 41.684, 4.716h32.834
                    c6.659-0.575, 11.704-2.669, 15.133-6.283l1.136-1.431c0.764-1.136, 1.479-2.901, 2.139-5.276c0.668-2.379, 1-5, 1-7.851
                    c-0.195-8.183, 0.428-15.558, 1.852-22.124c1.423-6.564, 3.045-11.513, 4.859-14.846c1.813-3.33, 3.859-6.14, 6.136-8.418
                    c2.282-2.283, 3.908-3.666, 4.862-4.142c0.948-0.479, 1.705-0.804, 2.276-0.999c4.568-1.522, 9.944-0.048, 16.136, 4.429
                    c6.187, 4.473, 11.99, 9.996, 17.418, 16.56c5.425, 6.57, 11.943, 13.941, 19.555, 22.124c7.617, 8.186, 14.277, 14.271, 19.985, 18.274
                    l5.708, 3.426c3.812, 2.286, 8.761, 4.38, 14.853, 6.283c6.081, 1.902, 11.409, 2.378, 15.984, 1.427l73.087-1.14
                    c7.229, 0, 12.854-1.197, 16.844-3.572c3.998-2.379, 6.373-5, 7.139-7.851c0.764-2.854, 0.805-6.092, 0.145-9.712
                    C546.782, 404.25, 546.115, 401.725, 545.451, 400.298z"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="contacts__hire clearfix">
          <form onSubmit={this.onSubmitForm} action="">
            <p>Ваше имя<span className="required">*</span><input required type="text" ref={(name) => { this.name = name; }} name="name" placeholder="напр. Кравцов Дмитрий" /></p>
            <p>Ваш email<span className="required">*</span><input required type="email" ref={(email) => { this.email = email; }} name="email" placeholder="напр. serdimoa@gmail.com" /></p>
            <p>Наименование вашей компании<input type="text" ref={(company) => { this.company = company; }} name="company" placeholder="напр. Airbnb" /></p>
            <p>Сопроводительное сообщение<textarea ref={(message) => { this.message = message; }} name="message" rows="5" defaultValue="" /></p>
            <input type="submit" className="submit" value="Отправить" />
          </form>
        </div>
        <SweetAlert
          show={this.state.alert.show}
          title={this.state.alert.title ? this.state.alert.title : ''}
          type={this.state.alert.type ? this.state.alert.type : 'info'}
          text={this.state.alert.text ? this.state.alert.text : ''}
          onConfirm={() => this.setState({ alert: { show: false } })}
        />
      </div>
    );
  }
}

export default Contacts;
