// Dynamic metadata
export async function generateMetadata(){

    // SEO Data Fetch
    return {
      title: 'Services',
    //   description: 'A Agency Website with NextJs 13 - SEO Friendly & REST API',
    }
  
}

const layout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default layout;