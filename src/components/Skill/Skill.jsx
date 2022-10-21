function Skill() {
    return (
        <section id="skills" class="skills">
            <div class="container">
                <div class="topper">
                    <div class="title fw-bold">My Skills</div>
                    <div class="line mb-5" style={{width: "134.66px"}}></div>
                </div>
                <div class="row">
                    <div class="col-md col-one">
                        <div class="skill-title fw-bold">Programming Languages</div>
                        <div class="skill-list">
                            <ul>
                                <li style={{backgroundColor: "#01589C", color: "#fff"}}>
                                    <img src="/images/lang-logo/c.svg" style={{backgroundColor: "#fff"}} alt=""/> C
                                </li>
                                <li style={{backgroundColor: "#01589C", color: "#fff"}}>
                                    <img src="/images/lang-logo/cpp.svg" style={{backgroundColor: "#fff"}} alt=""/> C++
                                </li>
                                <li style={{backgroundColor: "#F7DE1F", color: "#000"}}>
                                    <img src="/images/lang-logo/javascript.svg" alt=""/> JAVASCRIPT
                                </li>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <img src="/images/lang-logo/java.svg" style={{backgroundColor: "#fff", color: "#000"}} alt=""/> JAVA
                                </li>
                                <li style={{backgroundColor: "#6181B6", color: "#fff"}}>
                                    <img src="/images/lang-logo/php.png" style={{backgroundColor: "#fff"}} alt=""/> PHP
                                </li>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <img src="/images/lang-logo/sql.png" alt=""/> SQL
                                </li>
                                <li style={{backgroundColor: "#01589C", color: "#fff"}}>
                                    <img src="/images/lang-logo/typescript.png" style={{backgroundColor: "#fff"}} alt=""/> TYPESCRIPT
                                </li>
                                <li style={{backgroundColor: "#15344C", color: "#fff"}}>
                                    <img src="/images/lang-logo/python.svg" alt=""/>
                                     PYTHON
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md col-two">
                        <div class="skill-title fw-bold">Libraries & Frameworks</div>
                        <div class="skill-list">
                            <ul>
                                <li style={{backgroundColor: "#6DA45E"}}>
                                    <img src="/images/lang-logo/node-js.png" alt=""/> NODE.JS
                                </li>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <img src="/images/lang-logo/express-js.svg" alt=""/> EXPRESS.JS
                                </li>
                                <li style={{backgroundColor: "#563D7C", color: "#fff"}}>
                                    <img src="/images/lang-logo/bootstrap.svg" alt=""/> BOOTSTRAP
                                </li>
                                <li style={{backgroundColor: "#68BD45;"}}>
                                    <img src="/images/lang-logo/springboot.svg" alt=""/> SPRING BOOT
                                </li>
                                <li style={{backgroundColor: "#15344C"}}>
                                    <img src="/images/lang-logo/pyqt.png" alt=""/> PYQT
                                </li>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <span class="iconify" data-icon="logos:opencv"></span> OPENCV
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md col-three">
                        <div class="skill-title fw-bold">Tools</div>
                        <div class="skill-list">
                            <ul>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <img src="/images/lang-logo/vscode.svg" alt=""/> VS CODE
                                </li>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <img src="/images/lang-logo/intellij.png" alt=""/> INTELLIJ IDEA
                                </li>
                                <li style={{backgroundColor: "#F34F29", color: "#fff"}}>
                                    <img src="/images/lang-logo/git.svg" alt=""/> GIT
                                </li>
                                <li style={{backgroundColor: "#000"}}>
                                    <img src="/images/lang-logo/github.svg" alt=""/> GITHUB
                                </li>
                                <li style={{backgroundColor: "#333333"}}>
                                    <img src="/images/lang-logo/figma.svg" alt=""/> FIGMA
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md col-four">
                        <div class="skill-title fw-bold">Others</div>
                        <div class="skill-list">
                            <ul>
                                <li style={{backgroundColor: "#E24E26", color: "#fff"}}>
                                    <img src="/images/lang-logo/html5.svg" alt=""/> HTML5
                                </li>
                                <li style={{backgroundColor: "#1572B6", color: "#fff"}}>
                                    <img src="/images/lang-logo/css3.svg" alt=""/> CSS3
                                </li>
                                <li style={{backgroundColor: "#0101FF", color: "#fff"}}>
                                    <img src="/images/lang-logo/mysql.svg" alt=""/> MYSQL
                                </li>
                                <li style={{backgroundColor: "#336791"}}>
                                    <img src="/images/lang-logo/postgresql.svg" alt=""/> POSTGRESQL
                                </li>
                                <li style={{backgroundColor: "#fff", color: "#000"}}>
                                    <img src="/images/lang-logo/ssms.svg" alt=""/> MICROSOFT SQL SERVER
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skill;