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
                <img
                  src=${resolveAsset('/assets/profile-2.jpeg')}
                  className=${css(styles.image)}
                />
                <p className=${css(styles.p)}>
                    I'm passionate brazillian developer with more than 3 years of experience in the field.
                    Currently I'm living in Lima, Peru where I work as a RPA developer (Blue Prism / Automation Anywhere) for over 2 years.
                    Although I enjoy to work in my current field, my true passion is to develop games... So waiting my oportunitie arrive
                    to work in a game company, I will continue study the subject and create more amazing games!
                </p>
                <p className=${css(styles.p)}>

                </p>
            </div>
        </div>

        <footer className=${css(styles.footer)}>
            <${Link} to="/contact" className=${css(styles.contact)}>
                Contact me!
            <//>
        </footer>
    <//>
`

export default About

let styles = StyleSheet.create({
    content: { display: 'block' },
    image: {
        //borderRadius: '150%',
        width: '256px',
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
