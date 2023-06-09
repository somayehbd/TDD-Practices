function jobmatching(candidate, job) {
    if (candidate.minSalary == null || candidate.minSalary == undefined || job.maxSalary == null || job.maxSalary == undefined || candidate.minSalary == 0 || job.maxSalary == 0) {
        throw new Error('candidateor or job can not be zero')
    }
    
    let finalMinSalary = candidate.minSalary * .9;

    if (finalMinSalary <= job.maxSalary)
        return true
    else
        return false
}
module.exports = jobmatching;