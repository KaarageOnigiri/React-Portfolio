import Project from '../components/Project.jsx';
import data from '../utils/fetchProjects';

export default function Portfolio() {
    return (
        <div>
            <h1 className="custom-header">Portfolio</h1>
            <section>
                <div className="custom-portfolio-box">
                    <ul>
                        {data}
                        <Project data={data} />
                    </ul>
                </div>
            </section>
        </div>
    )
}