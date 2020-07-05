import { html, Component } from '../../deps/react.js'
import { StyleSheet, css } from '../../deps/aphrodite.js'
import { Link } from '../../deps/react-router-dom.js'
import Page from '../components/layout/page.js'
import resolveAsset from '../utils/resolveAsset.js'

let About = () => html`
    <${Page}
        title=""
        subtitle=""
        description=""
        sidebarImage=${resolveAsset('')}
        showLinks=${false}
    >
        <div className=${css(styles.content)}>
            <div className=${css(styles.info)}>
                <h1 className=${css(styles.title)}>Lohrran Borges</h1>
                <p className=${css(styles.p)}>
                    My name is Lohrran, this is my dev log, things I do for learn new things.
                    You can also go to my github and take a better look at my projects.
                </p>
                <p className=${css(styles.p)}>

                </p>
            </div>
        </div>

        <footer className=${css(styles.footer)}>
            <${Link} to="/contact" className=${css(styles.contact)}>
                Contact lohrranborges@gmail.com
            <//>
        </footer>
    <//>
`

export default About

let styles = StyleSheet.create({
    content: { display: 'block' },
    image: {
        borderRadius: '50%',
        width: '150px',
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
    footer: {
        padding: '10px 0',
        fontSize: '1.4rem',
        letterSpacing: '1px',
        fontWeight: 700,
        fontFamily: '"Source Sans Pro",Helvetica,Arial,sans-serif',
        textTransform: 'uppercase',
    },
    contact: {
        textDecoration: 'none',
        backgroundColor: 'transparent',
        color: '#999',
        borderBottom: 'none',
        fontSize: '1.4rem',
        ':hover': {
            textDecoration: 'none',
            backgroundColor: 'transparent',
            color: '#333',
            outline: 0,
            transition: 'all .4s',
            borderBottom: 'none',
        },
    },
})
