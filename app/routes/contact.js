import { html, Component } from '../../deps/react.js'
import { StyleSheet, css } from '../../deps/aphrodite.js'
import { Link } from '../../deps/react-router-dom.js'
import { Redirect } from '../../deps/react-router-dom.js'
import Page from '../components/layout/page.js'
import resolveAsset from '../utils/resolveAsset.js'

let Contact = () => html`
    <${Page}
        title=""
        subtitle=""
        description=""
        sidebarImage=${resolveAsset('')}
        showLinks=${false}
    >
        <div className=${css(styles.content)}>
            <div className=${css(styles.info)}>
                <h1 className=${css(styles.title)}>Contact</h1>
                <p className=${css(styles.p)}>
                    To know more about me or to hire me, I can be found and contact in the follow social medias:
                </p>
                <ul className=${css(styles.ul)}>
                  <li style="list-style-type: none;">
                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/github.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a href="https://github.com/Lohrran"
                        className=${css(styles.social)}>
                            lohrran/
                        </a>
                      </p>
                    </div>

                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/gitlab.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a href="https://gitlab.com/lohrran"
                         className=${css(styles.social)}>
                            @lohrran
                        </a>
                      </p>
                    </div>

                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/linkedin.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a href="https://linkedin.com/in/lohrran"
                         className=${css(styles.social)}>
                            lohrran
                        </a>
                      </p>
                    </div>

                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/twitter.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a href="https://twitter.com/LohrranBorges"
                         className=${css(styles.social)}>
                            @LohrranBorges
                        </a>
                      </p>
                    </div>

                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/google-play.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a href="https://play.google.com/store/apps/developer?id=Lohrran+Borges"
                         className=${css(styles.social)}>
                            /Lohrran Borges
                        </a>
                      </p>
                    </div>

                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/gmail.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a
                         className=${css(styles.social)}>
                            lohrranborges@gmail.com
                        </a>
                      </p>
                    </div>

                    <div className=${css(styles.container)}>
                      <img
                        src=${resolveAsset('/assets/discord.png')}
                        className=${css(styles.image)}
                      />

                      <p className=${css(styles.p)}>
                        <a
                         className=${css(styles.social)}>
                            Lohrran#2769
                        </a>
                      </p>
                    </div>

                  </li>
                </ul>

            </div>
        </div>
    <//>
`

export default Contact

let styles = StyleSheet.create({
    content: { display: 'block' },
    container: {
      flexGrow: 1,
      justifyContent:'center',
      alignItems: 'center',
    },

    image: {
        borderRadius: '100%',
        width: '40px',
        border: 0,
        maxWidth: '100%',
        verticalAlign: 'middle',
        float: 'left',
        marginRight: '2rem',
    },
    info: {},
    title: {
        margin: '30px 0 20px',
        fontSize: '3.8rem',
        fontWeight: 700,
        lineHeight: '1.1',
        fontFamily: '"Source Sans Pro",Helvetica,Arial,sans-serif',
    },
    p: {
        fontSize: '2rem',
        margin: '0 0 10px',
        marginBottom: '30px',
    },
    social: {
      textDecoration: 'none',
      backgroundColor: 'transparent',
      color: '#999',
      borderBottom: 'none',
      ':hover': {
          textDecoration: 'none',
          backgroundColor: 'transparent',
          color: '#333',
          outline: 0,
          transition: 'all .4s',
          borderBottom: 'none',
      },
    },

    ul: {
      columns: '3 auto',
    },
})
